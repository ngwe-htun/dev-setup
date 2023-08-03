ARG PHP_VERSION=8.2.8
ARG COMPOSER_VERSION=latest

FROM composer:${COMPOSER_VERSION} as composer

FROM php:${PHP_VERSION}-fpm

RUN apt update -y && \
    apt install -y --no-install-recommends \
    unzip \
    libzip-dev \
    libpng-dev \
    libjpeg-dev

RUN apt clean && \
    apt autoremove

RUN pecl install \
    pcov \
    zip

RUN docker-php-ext-install \
    zip \ 
    pdo_mysql \ 
    gd && \
    docker-php-ext-enable \
    pcov \ 
    zip \
    pdo_mysql \ 
    gd

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN composer global require laravel/pint --dev
