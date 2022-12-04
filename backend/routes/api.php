<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('v1')->group(function () {
    Route::prefix('/auth')->controller(AuthController::class)->group(function () {
        Route::post('/create', 'create');
        Route::post('/login', 'login');
    });

    Route::prefix('/category')->controller(CategoryController::class)->group(function () {
        Route::get('/parent', 'getParentCategory');
        Route::get('/{name_en}', 'show');
        Route::prefix('/{parent_name}')->group(function () {
            Route::get('/child', 'getChildCategory');
            Route::post('/', 'store')->middleware('auth:sanctum');
        });
    });

    Route::prefix('/item')->controller(ItemController::class)->group(function () {
        Route::post('/', 'store')->middleware('auth:sanctum');
        Route::get('/gold/coin', 'getGoldCoin');
    });
});
