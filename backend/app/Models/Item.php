<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */

    protected $table = 'items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'item_category_id',
        'city_id',
        'log_number',
        'base_price',
        'sellable_currency',
        'available_date',
        'qty',
        'order_qty',
    ];
}
