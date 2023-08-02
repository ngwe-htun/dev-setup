ARG NODE_VERSION=lts-slim

FROM node:${NODE_VERSION}

RUN npm install -g \
    eslint \ 
    @angular/cli \ 
    mocha \
    jest \
    nyc \ 
    yarn

RUN apt-get update -y && \
    apt-get install -y \ 
    vim \
    supervisor && \
    apt-get clean

ENTRYPOINT ["/usr/bin/supervisord", "-n", "-c",  "/etc/supervisor/supervisord.conf"]