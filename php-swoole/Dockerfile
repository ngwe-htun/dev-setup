ARG PHP_VERSION

FROM php:8.2-cli 

ARG UID=1000
ARG USER=swoole

# Install system dependency
RUN apt-get update && apt-get install -y \
    curl \
    libicu-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    supervisor

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install and enable swoole
RUN pecl install swoole

RUN docker-php-ext-install pdo_mysql && \
    docker-php-ext-enable swoole pdo_mysql

# System user
RUN useradd -G www-data,root -u $UID -d /home/$USER $USER

ENTRYPOINT ["/usr/bin/supervisord", "-n", "-c",  "/etc/supervisor/supervisord.conf"]

USER $USER