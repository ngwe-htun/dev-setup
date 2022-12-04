<?php

namespace App\Utils;

use App\Models\City;

class UtilsService
{
    public function __construct(
        protected City $city
    ) {
    }

    public function getCityById(int $id): ?City
    {
        return $this->city
            ->where('id', $id)
            ->first();
    }
}
