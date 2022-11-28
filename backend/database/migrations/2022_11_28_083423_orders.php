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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('item_category_id');
            $table->bigInteger('item_id');
            $table->string('buyer_name');
            $table->string('father_name');
            $table->string('nrc_numbers', 50);
            $table->longText('address');
            $table->string('phone_number', 10);
            $table->longText('purchase_reason');
            $table->decimal('monthly_income');
            $table->boolean('already_ordered');
            $table->boolean('term_condition');
            $table->timestamps();
            $table->index(['item_category_id']);
            $table->index(['nrc_numbers']);
            $table->index(['item_id']);
            $table->index(['item_category_id', 'nrc_numbers']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
