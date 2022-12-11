<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auctions', function (Blueprint $table) {
            $table->id();
            $table->string('bider_id');
            $table->integer('item_id')->default(-1);
            $table->integer('item_category_id')->default(-1);
            $table->string('log_number')->default('');
            $table->decimal('biding_price', 20)->default(0);
            $table->boolean('status')->default(0);
            $table->timestamps();
            $table->index('bider_id');
            $table->index('log_number');
            $table->index('item_category_id');
            $table->index(['log_number', 'created_at']);
            $table->index(['log_number', 'bider_id']);
            $table->index(['bider_id', 'status']);
            $table->index(['item_category_id', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
