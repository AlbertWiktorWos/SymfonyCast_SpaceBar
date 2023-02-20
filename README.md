# SymfonyCast
Project based on SymfonyCast tutorial 

# Quick start
run in command line next commands: 
* `composer install`
* `yarn install`
* `yarn watch`
* `symfony serve -d` *Caution - if website doesnt open try without -d*
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

## Database fast scripts
* `symfony console doctrine:database:drop --force`
* `symfony console doctrine:database:create`
* `symfony console make:migration`
* `symfony console doctrine:migrations:migrate`
* `symfony console doctrine:fixtures:load`