const elixir = require('laravel-elixir');
require ('laravel-elixir-lost');
require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sassLost([nm('sanitize.css/sanitize.css'), 'pinch.sass'], 'public/css/pinch.css')
    .webpack('pinch.js', 'public/js/pinch.js')
    .browserSync({
        proxy: 'localhost:8000',
    });
});

/**
 * Return the full node_modules path
 */
function nm(path) {
    return `../../../node_modules/${path}`;
}
