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

    public function getBider(?string $regNumber = null, ?string $name = null, ?string $company = null, bool $isReport = false): ?Bider
    {
        if (!$regNumber && !$name && !$company) {
            return null;
        }

        return $this->bider
            ->when($isReport, function ($query) {
                $query->withCount(['auctions as available_count' => fn ($query) => $query->where('status', 0)])
                    ->withCount(['auctions as biding_count' => fn ($query) => $query->where('status', 1)]);
            })
            ->when($regNumber, fn ($query) => $query->where('bider_reg_number', $regNumber))
            ->when($name, fn ($query) => $query->where('name', $name))
            ->when($company, fn ($query) => $query->where('company', $company))
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
            ->withCount(['auctions as available_count' => fn ($query) => $query->where('status', 0)])
            ->withCount(['auctions as biding_count' => fn ($query) => $query->where('status', 1)])
            ->get();
    }
}
