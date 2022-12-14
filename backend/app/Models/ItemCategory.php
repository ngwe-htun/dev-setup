<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ItemCategory extends Model
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
        'name_en',
        'name_mm',
        'is_auction',
        'item_category_id',
        'status',
    ];

    public function categories()
    {
        return $this->hasMany(ItemCategory::class);
    }

    public function childCategories()
    {
        return $this->hasMany(ItemCategory::class)->with('categories');
    }

    public function parentCategory()
    {
        return $this->belongsTo(ItemCategory::class, 'item_category_id');
    }
}
