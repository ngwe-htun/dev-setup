#### AVAILABLE
*Currently available by version*
- You can define specific version.
---

#### USAGE

##### Change Directory
*Change directory to start using docker compose*
- `cd setup/tidb`
---

##### VERIFYING `.env`
*Verifying that you have creaetd `.env` file from `.env.example`*
- `cp .env.example .env`
  
*Modify versions as you needed*
- ```
  # PORTS
  TIDB_PORT=4004
  TIDB_PD_PORT=2379
  GRAFANA_PORT=3999
  TIDB_API_PORT=10080
  PROMETHEUS_PORT=1676
  TIDB_VISION_PORT=8012

  # TiDB VERSIONS
  TIDB_PD_VERSION=latest
  TIDB_TIKV_VERSION=latest
  TIDB_TIDB_VERSION=latest

  # MONITORING VERSION
  GRAFANA_VERSION=6.0.1
  PROMETHEUS_VERSION=v2.2.1
  PUSHGATEWAY_VERSION=v0.3.1
  ```
---

##### RUN
*Runt the following command to start the containers*
- Run all containers (including monitoring tools)
  - ```
    docker compose up -d
    ```
- *Result*
    - ```
      NAME                IMAGE                      COMMAND                  SERVICE             CREATED             STATUS
      grafana             grafana/grafana:6.0.1      "/run.sh"                grafana             4 seconds ago       Up 3 seconds
      prometheus          prom/prometheus:v2.2.1     "/bin/prometheus --l…"   prometheus          4 seconds ago       Up 3 seconds
      pushgateway         prom/pushgateway:v0.3.1    "/bin/pushgateway --…"   pushgateway         4 seconds ago       Up 3 seconds
      ticlient            ngwehtun/ticlient:latest   "/bin/bash"              ticlient            4 seconds ago       Up 3 seconds        
      tidb                pingcap/tidb:latest        "/tidb-server --stor…"   tidb                4 seconds ago       Up 3 seconds
      tikv                pingcap/tikv:latest        "/tikv-server --addr…"   tikv                4 seconds ago       Up 3 seconds
      tipd                pingcap/pd:latest          "/pd-server --name=p…"   pd                  4 seconds ago       Up 3 seconds
      ```

- Run `tidb` without monitoring tools
  - ```
    docker compose up -d tidb ticlient
    ```
  - Result
      - ```
        NAME                IMAGE                      COMMAND                  SERVICE             CREATED             STATUS
        ticlient            ngwehtun/ticlient:latest   "/bin/bash"              ticlient            3 seconds ago       Up 2 seconds        
        tidb                pingcap/tidb:latest        "/tidb-server --stor…"   tidb                3 seconds ago       Up 2 seconds
        tikv                pingcap/tikv:latest        "/tikv-server --addr…"   tikv                3 seconds ago       Up 3 seconds
        tipd                pingcap/pd:latest          "/pd-server --name=p…"   pd                  4 seconds ago       Up 3 seconds
        ```
---

##### USING `TIDB`
- Executing to `ticlient`
  - *Command*
    - ```
      docker compose exec ticlient /bin/bash
      ```
  - *Result*
    - ```
      b4ae43513779:/# 
      ```
- Connecting to `tidb` cluster
  - *Command*
    - ```
      b4ae43513779:/# mysql -uroot -htidb -P4000
      ```
  - *Result*
    - ```
      MySQL [(none)]> 
      ```
---

#### CONNECTING
- From localhost
  ```
  host=localhost
  port=4004
  username=root
  password=
  ```
- From the same docker `bridge` network
  ```
  host=tidb
  port=4000
  username=root
  password=
  ```
---

##### MONITORING `TIDB` CLUSTER
- *Coming soon...*
---

#### STOP & REMOVE CONTAINERS
- Stop and remove (without deleteting persistent data volumes)
  - *Command*
    ```
    docker compose down
    ```
  - *Result*
    ```
    [+] Running 7/7
    ✔ Container grafana      Removed
    ✔ Container pushgateway  Removed
    ✔ Container ticlient     Removed
    ✔ Container prometheus   Removed
    ✔ Container tidb         Removed
    ✔ Container tikv         Removed
    ✔ Container tipd         Removed
    ```
- Stop and remove (including persistent data volumes)
  - **NOTE: Be careful**
  - *Command*
    ```
    docker compose down -v
    ```
  - *Result*
    ```
    ...
    ```
---

*Happing coding*