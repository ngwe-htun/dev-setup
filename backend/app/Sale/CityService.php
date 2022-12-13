<?php

namespace App\Sale;

use App\Models\City;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Collection;

class CityService
{
    public function __construct(
        protected City $city
    ) {
    }

    public function getCityById(int $id): City
    {
        return $this->city
            ->where('id', $id)
            ->first();
    }

    public function getCityByName(string $name): ?City
    {
        return $this->city
            ->where('name_en', $name)
            ->first();
    }

    public function getCities(array $ids): ?Collection
    {
        return $this->city
            ->whereIn('id', $ids)
            ->get();
    }

    public function getAllCities(): ?Collection
    {
        return Cache::rememberForever('cities', fn () => $this->city->all());
    }
}
