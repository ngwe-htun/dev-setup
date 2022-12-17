<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Auction extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */

    protected $table = 'auctions';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'bider_id',
        'item_id',
        'item_category_id',
        'log_number',
        'biding_price',
        'status'
    ];


    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id');
    }

    public function category()
    {
        return $this->belongsTo(ItemCategory::class, 'item_category_id');
    }

    public function bider()
    {
        return $this->belongsTo(Bider::class, 'bider_id');
    }

    public function parentCategory()
    {
        return $this->category()->with('parentCategory');
    }
}
