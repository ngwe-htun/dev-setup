### Local development setup with doccker

### Requirements -
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)

There are different methods to use docker based on your OS - 
  - [Docker Cli](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)  (Linux, Window)
  - [Docker Desktop](https://docs.docker.com/desktop/install/linux-install/) (MacOs, Linux, Window)
---

### Install docker
- [Installation](./docs/install_docker.md)
---

### Available services -
  - [php](./php/docs/overview.md)
  - [nodejs](./node/docs/overview.md)
  - [tidb](./tidb/docs/overview.md)
  - php-swoole
  - redis
  - golang
  - ...
---

### Prepare `.env`
*Preparing environment file*
- ```
  cp .env.example .env
  ```
---

#### EXTRA
##### CUSTOMIZATION 
- *Coming soon*
---

##### CI EXAMPLE (SIMPLE)
- [DEMO](https://git.frontiir.net/ngwe.htun/explore)
- Folder
  - ci
    - react
      - `.gitlab-ci.yml` - CI example for react
    - angular
      - `.gitlab-ci.yml` - CI example for react
    - ...
---

*Happy coding*