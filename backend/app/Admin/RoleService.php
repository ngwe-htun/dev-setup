<?php

namespace App\Admin;

use App\Models\City;
use App\Models\Role;
use App\Models\User;
use App\Constants\RoleConstant;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Collection;

class RoleService
{
    public function __construct(
        protected Role $role
    ) {
    }

    public function createRole(User $user, RoleConstant $attribute, string $value): Role
    {
        return $this->role->updateOrCreate(
            [
                'user_id' => $user->id,
                'attribute' => $attribute
            ],
            [
                'user_id' => $user->id,
                'attribute' => $attribute->value,
                'value' => $value

            ]
        );
    }

    public function getRoles(User $user): ?Collection
    {
        return cache()->remember(
            $user->id . '_roles',
            86400,
            function () use ($user) {
                return $this->role
                    ->where('user_id', $user->id)
                    ->get();
            }
        );
    }

    public function getRoleByAttribute(User $user, RoleConstant $attribute): ?Role
    {
        return $this->role
            ->where('user_id', $user->id)
            ->where('attribute', $attribute->value)
            ->first();
    }

    public function getAvailableCities(User $user): ?Collection
    {
        $rule = $this->role
            ->where('user_id', $user->id)
            ->where('attribute', RoleConstant::AVAILABLE_CITIES)
            ->first();

        $citiesId = explode(',', $rule?->value);

        return City::getCities($citiesId);
    }

    public function checkPermission(RoleConstant $rule): bool
    {
        if ($roles = $this->getRoles(Auth::user())) {
            if ($roles->firstWhere('attribute', $rule->value)) {
                return true;
            }
            return false;
        }
        return false;
    }
}
