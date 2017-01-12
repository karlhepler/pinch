<?php

Route::get('/{page}', function () {
    return view('master');
})->where('page', '^(?!api).*');
