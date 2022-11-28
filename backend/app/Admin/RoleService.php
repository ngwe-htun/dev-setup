<?php

namespace App\Admin;

use App\Models\Role;

class RoleService
{
    public function __construct(
        protected Role $role
    ) {
    }

    public function createRole(string $attribute, string $value): Role
    {
        return $this->role->create(
            [
                'attribute' => $attribute,
                'value' => $value
            ]
        );
    }

    public function getRole(int $id): ?Role
    {
        return $this->user->where('id', $id)
            ->first();
    }

    public function getRoleByAttribute(string $attribute): ?Role
    {
        return $this->user->where('attribute', $attribute)
            ->first();
    }
}
