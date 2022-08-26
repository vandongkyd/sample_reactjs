<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get("/", [\App\Http\Controllers\HomeController::class, "index"])->name("home.index");
Route::get("/product", [\App\Http\Controllers\HomeController::class, "index"])->name("home.index");


Route::get("/pre-config-settings/data.js", function () {
    $configFrontEnd = resource_path("config_frontend/config.php");
    $data['data']   = require $configFrontEnd;
    header('Content-Type: text/javascript');
    header('Cache-Control: private, max-age=0, must-revalidate');
    echo("'use_strict';");
    echo('window.CONFIG_DATA = ' . json_encode($data) . ';');
    echo('Object.freeze(window.CONFIG_DATA);');
    exit();
});
