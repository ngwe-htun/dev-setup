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

    public static function getCityById(int $id): City
    {
        return self::where('id', $id)
            ->first();
    }

    public static function getCityByName(string $name): ?City
    {
        return self::where('name_en', $name)
            ->first();
    }

    public static function getCities(array $ids): ?Collection
    {
        return self::whereIn('id', $ids)
            ->get();
    }

    public static function getAllCities(): ?Collection
    {
        return Cache::rememberForever('cities', fn () => self::all());
    }
}
