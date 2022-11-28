<?php

namespace App\Admin;

use App\Models\User as UserModel;


class User
{
    public function __construct(
        protected UserModel $user
    ) {
    }

    public function createUser(string $name, string $password): UserModel
    {
        return $this->user->create(
            [
                'name' => $name,
                'password' => $password
            ]
        );
    }

    public function getUser(string $name): ?UserModel
    {
        return $this->user->where('name', $name)
            ->first();
    }
}
