<?php

namespace App\Providers;

use App\Item\ItemService;
use App\Admin\RoleService;
use App\Admin\UserService;
use App\Order\OrderService;
use App\Item\CategoryService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Database\ConnectionResolverInterface;

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
        $this->enableDBLogging();
        // $this->app->make(UserService::class);
        // $this->app->make(RoleService::class);
        // $this->app->make(CategoryService::class);
        // $this->app->make(OrderService::class);
        // $this->app->make(CategoryService::class);
        // $this->app->make(ItemService::class);
    }

    private function enableDBLogging()
    {
        if ($this->app['config']['app.debug']) {
            $db = $this->app->make(ConnectionResolverInterface::class);

            // Enable query logging
            $db->enableQueryLog();

            $db->listen(function (QueryExecuted $event) {
                Log::info($event->sql);
                Log::info(json_encode($event->bindings));
                Log::info('Query take ' . $event->time);
            });
        }
    }
}
