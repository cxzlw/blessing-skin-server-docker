FROM ubuntu:22.04


LABEL Maintainer="build docker images by @feilongproject"
LABEL Description="blessing-skin-server container with Nginx 1.18.0 & PHP 8.1.2 based on Ubuntu 22.04"

WORKDIR /var/www/blessing-skin/

ENV TZ=Asia/Shanghai

COPY ./src /var/www/blessing-skin
COPY ./config/sources.list /etc/apt/sources.list
COPY ./config/50x.html /var/www/html/50x.html

RUN apt-get update && \
  apt-get upgrade -y && \
  echo "${TZ}" > /etc/timezone && \
  ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime && \
  # apt-get install tzdata language-pack-zh-hans -y && \
  # locale-gen zh_CN.UTF-8 && \
  # echo "export LC_ALL=zh_CN.UTF-8">> /etc/profile && \
  apt-get install supervisor systemctl curl lsof vim git zip wget nginx php8.1 redis php8.1-redis php8.1-mysql php8.1-sqlite php8.1-fpm php8.1-gd php8.1-mbstring php8.1-xml php8.1-zip php8.1-pgsql -y && \
  php -v && \
  chown -R www-data:www-data /var/www/blessing-skin && \
  ls -alh /var/www/ /var/www/blessing-skin && \
  php artisan key:generate

COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY config/fpm-pool.conf /etc/php/8.1/fpm/php-fpm.conf
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80

CMD ["/usr/bin/python3.10","/usr/bin/supervisord","-c","/etc/supervisor/conf.d/supervisord.conf"]
