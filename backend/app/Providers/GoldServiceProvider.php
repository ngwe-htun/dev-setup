<?php

namespace App\Providers;

use App\Admin\RoleService;
use App\Admin\UserService;
use App\Order\OrderService;
use App\Item\CategoryService;
use Illuminate\Support\ServiceProvider;

class GoldServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->make(UserService::class);
        $this->app->make(RoleService::class);
        $this->app->make(CategoryService::class);
        $this->app->make(OrderService::class);
    }
}
