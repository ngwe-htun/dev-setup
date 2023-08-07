ARG NODE_VERSION=lts-slim

FROM node:${NODE_VERSION}

RUN npm install -g \
    eslint \ 
    @angular/cli \ 
    mocha \
    jest \
    nyc

RUN apt-get update -y && \
    apt-get install -y \ 
    vim \
    chromium \
    supervisor && \
    apt-get clean

ENV CHROME_BIN=/usr/bin/chromium

ENTRYPOINT ["/usr/bin/supervisord", "-n", "-c",  "/etc/supervisor/supervisord.conf"]