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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->integer('item_category_id');
            $table->bigInteger('city_id')->default(-1);
            $table->string('log_number')->default('');
            $table->decimal('base_price');
            $table->string('sellable_currency', 50);
            $table->dateTime('available_date')->useCurrent();
            $table->integer('qty')->default(0);
            $table->integer('order_qty')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
};
