<?php

namespace App\Sale;

use App\Models\Bider;
use Illuminate\Database\Eloquent\Collection;

class BiderService
{
    public function __construct(
        protected Bider $bider
    ) {
    }

    public function createBider(array $data): ?Bider
    {
        return $this->bider->create(
            [
                'bider_reg_number' => $data['reg_number'],
                'name' => $data['name'],
                'company' => $data['company'],
                'country' => $data['country']
            ]
        );
    }

    public function getBider(?string $regNumber = null, ?string $name = null, ?string $company = null): ?Bider
    {
        if (!$regNumber && !$name && !$company) {
            return null;
        }

        return $this->bider
            ->when(!$regNumber, fn ($query) => $query->where('bider_reg_number', $regNumber))
            ->when(!$name, fn ($query) => $query->where('name', $name))
            ->when(!$company, fn ($query) => $query->where('company', $company))
            ->first();
    }

    public function getBiderById(int $id): ?Bider
    {
        return $this->bider
            ->where('id', $id)
            ->first();
    }

    public function biderList(): ?Collection
    {
        return $this->bider
            ->get();
    }
}
