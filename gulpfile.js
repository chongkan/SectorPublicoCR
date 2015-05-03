var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 | http://laravel.com/docs/5.0/elixir
 */

/*
 |--------------------------------------------------------------------------
 | Frontend to Backend Deployment
 |--------------------------------------------------------------------------
 |
 | Copy compiled assets from  _frontend/public
 |
 */
elixir(function(mix) {
    mix.copy('_frontend/public/css', 'public/css');
});