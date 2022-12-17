<?php

use App\Http\Controllers\AuctionController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BiderController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReportController;
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

Route::prefix('v1')->group(function () {
    Route::prefix('/admin')->group(function () {
        Route::prefix('/auth')->controller(AuthController::class)->group(function () {
            Route::post('/login', 'login');
            Route::put('/change/pass', 'changePass');
            Route::middleware('auth:sanctum')->group(function () {
                Route::get('/roles', 'getRoles');
                Route::get('/user/list', 'index');
                Route::post('/create', 'store');
                Route::put('/reset', 'resetPassword');
                Route::post('/assign/role', 'assignRole');
            });
        });

        Route::middleware('auth:sanctum')->group(function () {
            Route::prefix('/category')->controller(CategoryController::class)->group(function () {
                Route::get('/parent', 'getParentCategory');
                Route::get('/{name_en}', 'show');
                Route::get('/list', 'index');
                Route::prefix('/{parent_id}')->group(function () {
                    Route::get('/child', 'getChildCategory');
                    Route::post('/', 'store');
                });
            });

            Route::prefix('/item')->controller(ItemController::class)->group(function () {
                Route::post('/', 'store')->middleware('auth:sanctum');
                Route::get('/by/category', 'getCategoryItem');
                Route::get('/list/by/category/{category_id}', 'index');
            });

            Route::apiResource('/bider', BiderController::class)->only(['store', 'show', 'index'])->whereNumber('bider');

            Route::prefix('/report')->controller(ReportController::class)->group(function () {
                Route::get('/search', 'search');
                Route::get('/order', 'order');
                Route::get('/auction', 'auction');
            });

            Route::get('/cities', [ReportController::class, 'cities']);

            Route::prefix('/auction')->controller(AuctionController::class)->group(function () {
                Route::post('/issue/form', 'issueForm');
            });
        });
    });

    //client part
    Route::prefix('/client')->middleware('public')->group(function () {
        Route::prefix('/category')->controller(CategoryController::class)->group(function () {
            Route::get('/parent', 'getParentCategory');
            Route::get('/{name_en}', 'show');
            Route::prefix('/{parent_id}')->group(function () {
                Route::get('/child', 'getChildCategory');
            });
        });

        Route::prefix('/item')->controller(ItemController::class)->group(function () {
            Route::get('/by/category', 'getCategoryItem');
            Route::get('/by/log/{log_number}', 'show');
        });

        Route::apiResource('/order', OrderController::class)->only(['store', 'show'])
            ->whereNumber('order');

        Route::prefix('/order')->controller(OrderController::class)->group(function () {
            Route::get('/nrc', 'getNRC');
            Route::get('/check/buyer', 'checkBuyer');
        });

        Route::prefix('/auction')->controller(AuctionController::class)->group(function () {
            Route::post('/', 'store');
        });

        Route::get('/cities', [ReportController::class, 'cities']);
    });
});
