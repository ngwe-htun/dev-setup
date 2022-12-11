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
        Schema::create('biders', function (Blueprint $table) {
            $table->id();
            $table->string('bider_reg_number', 100)->unique();
            $table->string('name');
            $table->string('company');
            $table->string('country', 100);
            $table->timestamps();
            $table->index('bider_reg_number');
            $table->index('name');
            $table->index(['bider_reg_number', 'name']);
            $table->index(['bider_reg_number', 'name', 'company']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('biders');
    }
};
