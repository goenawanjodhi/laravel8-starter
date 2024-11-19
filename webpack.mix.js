const mix = require('laravel-mix');
require('laravel-mix-purgecss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass("resources/assets/scss/main-style.scss", "public/css")
    .js('resources/assets/js/main-script.js', 'public/js')
    .purgeCss({ enabled: true })
    .options({ autoprefixer: { remove: false } });