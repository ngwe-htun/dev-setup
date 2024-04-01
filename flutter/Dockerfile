FROM ubuntu:latest

RUN apt-get update -y && \
    apt-get install -y \
    curl \
    git \
    unzip \
    xz-utils zip \
    libglu1-mesa \
    openjdk-8-jdk \
    wget && \
    apt-get clean && \
    apt-get remove && \
    rm -rf /var/lib/app/lists