<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */

    protected $table = 'item_categories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'item_category_id',
        'item_id',
        'buyer_name',
        'father_name',
        'nrc_numbers',
        'address',
        'phone_number',
        'purchase_reason',
        'monthly_income',
        'already_ordered',
        'term_condition'
    ];

    public function item()
    {
        return $this->belongsTo(Item::class, 'item_id');
    }

    public function category()
    {
        return $this->belongsTo(ItemCategory::class, 'item_category_id');
    }

    public function parentCategory()
    {
        return $this->category()->with('parentCategory');
    }
}
