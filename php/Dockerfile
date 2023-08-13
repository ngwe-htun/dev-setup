ARG PHP_VERSION=8.2.8
ARG COMPOSER_VERSION=latest

FROM composer:${COMPOSER_VERSION} as composer

FROM php:${PHP_VERSION}-fpm

RUN apt update -y && \
    apt install -y --no-install-recommends \
    unzip \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    git \ 
    vim

RUN apt clean && \
    apt autoremove

RUN pecl install \
    pcov

RUN docker-php-ext-install \
    zip \ 
    pdo_mysql \
    opcache \
    gd && \
    docker-php-ext-enable \
    pcov

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN composer global require laravel/pint --dev
