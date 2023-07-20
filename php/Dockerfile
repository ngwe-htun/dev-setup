ARG php_version=8.2.8-cli
ARG composer_version=latest

# Composer image (With specific version)
FROM composer:${composer_version} as base

# PHP (With specific version) 
FROM php:${php_version}

# ARG user
# ARG uid

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    vim \
    unzip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install \ 
    pdo_mysql \ 
    mbstring  \
    exif \
    pcntl \ 
    bcmath \
    gd \
    rdkafka

# Prepare composer
COPY --from=base /usr/bin/composer /usr/bin/composer

# # User with UID
# RUN useradd -G www-data,root -u $uid -d /home/$user $user
# RUN mkdir -p /home/$user/.composer && \
#     chown -R $user:$user /home/$user

WORKDIR /var/www