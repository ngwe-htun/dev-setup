<?php

namespace App\Admin;

use App\Models\User;

class UserService
{
    public function __construct(
        protected User $user
    ) {
    }

    public function createUser(string $name, string $password): User
    {
        return $this->user->create(
            [
                'name' => $name,
                'password' => $password
            ]
        );
    }

    public function getUser(string $name): ?User
    {
        return $this->user->where('name', $name)
            ->first();
    }
}
