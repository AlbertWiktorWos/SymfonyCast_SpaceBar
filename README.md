# SymfonyCast
Project based on SymfonyCast tutorial


# Quick start
run in command line next commands:
* `composer install`
* `yarn install`
* `yarn watch`
* `docker-compose up -d`
* `symfony serve -d` *Caution - if website doesnt open try without -d*
* `symfony var:export DATABASE_PORT` to check the port of the database to set it in database propeteries in phpStorm viewer and in .env
## prepare database
* `symfony console doctrine:database:create` to create database on docker-compose basics
* `symfony console doctrine:migration:migrate`
* `symfony console doctrine:fixtures:load` to fill the database


## Show config
to see list of variables and connection to database run:
*`symfony var:export –multiline`

## Better start localserver:
to run:
* `symfony serve -d`

to stop
* `symfony server:stop`

to check status:
* `symfony server:status`

to use https run first:
* `symfony.exe server:ca:install`

### old Start
run in command line:
* `php -S 127.0.0.1:8000 -t public/`

run in browser: `http://localhost:8000/`

## yarn
to install yarn run `yarn install` after we check that yarn and node extists (`node -v` and `yarn -v`) otherwise install them too

to build run `yarn watch` it builds and watch all the changes

we also added a jquery to it by `yarn add jquery --dev` and added a bootstrap by `yarn add bootstrap --dev`

if error occurs
node:internal/crypto/hash:71 this[kHandle] = new _Hash(algorithm, xofLen); ^ Error: error:0308010C:digital envelope routines::unsupported at new Hash (node:internal/crypto/hash:71:19) at Object.createHash (node:crypto:133:10) at module.exports
we need to set in environment variable NODE_OPTIONS the value --openssl-legacy-provider

## First config phpStorm
*plugins: symfony plugin, php annotations
*php->symfony->enable plugin
*Languages & frameworks -> php -> composer -> composer executable : for example `C:\Users\Lenovo\Documents\Symfony\cauldron_overflow\bin\console`

## error with apcu
need to install apcu by:
`pecl install apcu`

## Environments
set `dev` to logs everything and show exceptions

set `prod` to omptimized for speed and hides exception messages

to set this env we need to change APP_ENV variable in .env

##Testing email
* visit https://mailtrap.io/
* visit https://sendgrid.com/

####run:
set MAILER_DSN and DEV_MAIL_RECIPIENT from .env.local.dist
php bin/console messenger:consume -vv
php bin/console app:author-weekly-report:send

## Database fast scripts
* `symfony console doctrine:database:drop --force`
* `symfony console doctrine:database:create`
* `symfony console make:migration`
* `symfony console doctrine:migrations:migrate`
* `symfony console doctrine:fixtures:load`