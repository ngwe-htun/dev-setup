<?php

namespace App\Admin;

use App\Models\User;

class UserService
{
    public function __construct(
        protected User $user
    ) {
    }

    public function createUser(string $name, string $password, int $id = -1): User
    {
        return $this->user->updateOrCreate(
            [
                'id' => $id
            ],
            [
                'name' => $name,
                'password' => $password
            ]
        );
    }

    public function getUser(string $name): ?User
    {
        return $this->user
            ->where('name', $name)
            ->first();
    }

    public function getUserById(int $id): ?User
    {
        return $this->user
            ->where('id', $id)
            ->first();
    }

    public function checkUser(string $name, string $password): ?User
    {
        return $this->user
            ->where('name', $name)
            ->where('password', $password)
            ->first();
    }
}
