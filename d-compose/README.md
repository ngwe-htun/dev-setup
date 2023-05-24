# Docker Compose Setup

This setup helps to create the server environment that can be run under docker environment.

### Clone 

    git clone git@git.frontiir.net:frontiir-services/employee-center/backend-api/setup.git

### Docker Environment
You will need the **Docker** ready environment with Docker Engine (DE), Docker Compose(DC), and containerd. 

#### Installation
**Ubuntu**
DE, DC, Containerd
>https://docs.docker.com/engine/install/ubuntu/

Docker Desktop
>https://docs.docker.com/desktop/install/ubuntu/

**Windows**
Docker Desktop
>https://docs.docker.com/desktop/install/windows-install/

**Mac**
Docker Desktop
>https://docs.docker.com/desktop/install/mac-install/

### Modify Config
In ***`.env`*** , modify the configuration to your need.
For PHP version support, modify this variable:

    PHP_VERSION=8.2

For Application source code path, modify this variable:

    CODE_PATH=/Users/apple/Documents/Projects/be-services

In ***`docker-compose.yaml`*** , modify the configuration to your need to run the application server under Docker environment.

Under **`php:`** section, changing the port to serve the PHP application server (e.g thru Laravel PHP artisan), modify the available port.

    ports:
      - "8008:80"

Here **`8008`** will serve the application outside of Docker VM and internally map to port **`80`** which actual application server is listening. Meaning that you will be running application by calling `http://127.0.0.1:8008` which will actual serving through inside Docker's application server port 80.

If you are planning to run with Nginx, modify the configuration under `nginx/conf.d/sample.conf` Make sure to configure the document root path: 

    root /var/www/application-path/public
Note: don't forget to map your server name in `/etc/hosts`.

## Running VM

You can fire up the VMs under Docker using the following command:

Start up VM instances from the docker images:

    docker-compose up -d

Stop the docker VM instances:

    docker-compose down

Going inside the docker VM instance and modify inside the VM:

    docker-compose exec php bash

For example, install the Laravel and create the new project after you are inside the VM instance:

    composer create-project laravel/laravel project-name

## Ready

After fire up the server instances, you should be able to check the environment ready; for instance, 

If you serve with PHP Laravel artisan

    http://127.0.0.1:8008

If you serve with Nginx

    http://myserver-nginx.dev

