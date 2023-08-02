#### AVAILABLE
*Currently available by version*
- [lts](./lts.md)
---

#### USAGE

##### Change Directory
*Change directory to start using docker compose*
- `cd setup/`
---

##### VERIFYING `.env`
*Verifying that you mount code path and version are correct*
- ```
  NODE_VERSION=lts
  NODE_PROJECTS_PATH=/your/root/directory/to/project
  ```
---

##### RUN
*Runt the following command to start the container*
- ```
  docker compose up -d nodejs
  ```
---

##### VERIFYING
*Verifying that the container successfully started*
- ```
  docker compose ps
  ``` 

*Result*
- ```
  NAME                IMAGE               COMMAND                  SERVICE             CREATED             STATUS       
  nodejs              dev-node:lts        "/usr/bin/supervisor…"   nodejs              5 seconds ago       Up 4 seconds
  ```
---

##### EXECUTE A COMMAND IN A RUNNING CONTAINER
- Command
  - ```
    docker compose exec nodejs /bin/bash
    ```
- Result
  - ```
    root@93203b0330a9:/apps#
    ```
*You can start using nodejs service*

---

##### USE WITH NGINX
- *Coming soon...*
---

##### EXTRA
- *Happy coding with JS*
- *More documentation coming soon ...*