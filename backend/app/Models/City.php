<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;

class City extends Model
{
    use HasFactory;
    /**
     * The database table used by the model.
     *
     * @var string
     */

    protected $table = 'cities';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'display_name',
    ];

    public function order()
    {
        return $this->hasMany(Order::class, 'city_id');
    }
}
