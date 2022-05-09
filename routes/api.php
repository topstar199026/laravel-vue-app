<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\RegisterController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('/user/email/login', [LoginController::class, 'loginByEmail']);
// Route::post('/user/email/register', [RegisterController::class, 'registerByEmail']);

Route::prefix('user')
    ->group(function () {
        Route::post('/email/login', [LoginController::class, 'loginByEmail']);
        Route::post('/email/register', [RegisterController::class, 'registerByEmail']);

        Route::post('/social/login/{provider}', [LoginController::class, 'loginBySocial']);
        Route::post('/social/register/{provider}', [RegisterController::class, 'registerBySocial']);

        Route::group(['middleware' => 'auth:sanctum'], function() {
            Route::get('logout', [LoginController::class, 'logout']);
            Route::get('user', [LoginController::class, 'user']);
        });

    });

