ARG PHP_VERSION

FROM php:8.2-cli 

# Install system dependency
RUN apt-get update && apt-get install --no-install-recommends -y \
    curl \
    libicu-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    supervisor \
    librdkafka-dev

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install and enable swoole
RUN pecl install swoole rdkafka

RUN docker-php-ext-install pdo_mysql && \
    docker-php-ext-enable swoole pdo_mysql rdkafka

ENTRYPOINT ["/usr/bin/supervisord", "-n", "-c",  "/etc/supervisor/supervisord.conf"]