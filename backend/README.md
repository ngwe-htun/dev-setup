# MONREC order and auction

### system requirement
- laravel 9.0 >=
- PHP 8.1 >=
- mysql 5.7 =
- redis *

### setup notes
- pulling or copy the backend code
- cd backend
- run the `composer install`
- cp `.env.example` to `.env`
- configure of database connection in `.env`
- after that run the `php artisan migrate` for the creation the database schema
- run the `php artisan db:seed` for the initial data importing to database