#### AVAILABLE
*Currently available by version*
- [8.2.8](./8.2.8.md)

---

#### USAGE

##### Change Directory
*Change directory to start using docker compose*
- `cd setup/` 
---

##### VERIFYING `.env`
*Verifying that you mount code path and version are correct*
- ```
  PHP_VERSION=8.2.8
  PHP_CODE_PATH=/your/root/directory/to/project
  ```
---

##### RUN
*Runt the following command to start the container*
- ```
  docker compose up -d php
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
  php                 dev-php:8.2.8       "docker-php-entrypoi…"   php                 24 minutes ago      Up 24 minutes
  ```
---

##### EXECUTE A COMMAND IN A RUNNING CONTAINER
- Command
  - ```
    docker compose exec php /bin/bash
    ```
- Result
  - ```
    root@1ca8d9f96e6a:/var/www#
    ```
*You can start using php service*

---

##### USAGE WITH NGINX
- *Coming soon...*
---

##### EXTRA
- *Happy coding with PHP*
- *More documentation coming soon ...*