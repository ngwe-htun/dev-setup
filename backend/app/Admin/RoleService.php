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
    /**
     * RoleService construct
     * @param Role $role
     */
    public function __construct(
        protected Role $role
    ) {
    }

    /**
     * Assign the user with role
     *
     * @param User $user
     * @param RoleConstant $attribute
     * @param string $value
     * @return Role
     */
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

    /**
     *  Get roles by user
     *
     * @param User $user
     * @return Collection|null
     */
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

    /**
     * Get role with user and attribute
     *
     * @param User $user
     * @param RoleConstant $attribute
     * @return Role|null
     */
    public function getRoleByAttribute(User $user, RoleConstant $attribute): ?Role
    {
        return $this->role
            ->where('user_id', $user->id)
            ->where('attribute', $attribute->value)
            ->first();
    }

    /**
     * Available cities data by user
     *
     * @param User $user
     * @return Collection|null
     */
    public function getAvailableCities(User $user): ?Collection
    {
        $rule = $this->role
            ->where('user_id', $user->id)
            ->where('attribute', RoleConstant::AVAILABLE_CITIES)
            ->first();

        $citiesId = explode(',', $rule?->value);

        return City::getCities($citiesId);
    }

    /**
     * Checking the user's permission
     *
     * @param RoleConstant $rule
     * @return boolean
     */
    public function checkPermission(RoleConstant $rule): bool
    {
        if ($roles = Auth::user()?->roles) {
            if ($roles->firstWhere('attribute', $rule->value)) {
                return true;
            }
            return false;
        }
        return false;
    }
}
