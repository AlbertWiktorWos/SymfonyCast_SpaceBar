# =========================
# PHP 7.4 FPM + system deps
# =========================
FROM php:7.4-fpm

# System dependencies (wkhtmltopdf + fonts + libraries for GD + xsl (Inky requires that for "styling" in mailing) + yarn with nodejs + librabbitmq-dev (rabbitmq)
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libicu-dev \
    libzip-dev \
    zlib1g-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libxrender1 \
    libfontconfig1 \
    libxext6 \
    xfonts-base \
    xfonts-75dpi \
    libxslt1-dev \
    wkhtmltopdf \
    librabbitmq-dev \
    && rm -rf /var/lib/apt/lists/*
#a the end remove apt cache /\

# PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install intl pdo pdo_mysql zip gd opcache xsl

# APCu cache
RUN pecl install apcu \
    && docker-php-ext-enable apcu

# amqp extension for RabbitMQ
RUN pecl install amqp-1.10.0 \
    && docker-php-ext-enable amqp

# Composer (multi-stage copy)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer


# -------------------------
# Install Node 18.15 + npm 9.5 + Yarn 1.22 - this versions works localy well
# -------------------------
ENV NODE_VERSION=18.15.0
ENV NPM_VERSION=9.5.0
ENV YARN_VERSION=1.22.10

# Install Node
RUN curl -fsSL https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz \
    -o node.tar.xz \
    && tar -xJf node.tar.xz -C /usr/local --strip-components=1 \
    && rm node.tar.xz \
    && npm install -g npm@$NPM_VERSION \
    && npm install -g yarn@$YARN_VERSION

# Verify installation
RUN node -v && npm -v && yarn -v

# PHP config
COPY docker/php/php.ini /usr/local/etc/php/conf.d/app.ini

# Set working directory
WORKDIR /var/www/html

# Copy project code
COPY . /var/www/html

# Fix permissions for var/cache and var/logs
RUN chown -R www-data:www-data /var/www/html/var

# Optional: install Symfony CLI (if potrzebne w kontenerze)
RUN curl -sS https://get.symfony.com/cli/installer | bash \
    && mv /root/.symfony5/bin/symfony /usr/local/bin/symfony