<?php

namespace App\Admin;

use App\Models\User;
use App\Constants\RoleConstant;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function __construct(
        protected User $user,
    ) {
    }

    /**
     * Admin panel user creation
     *
     * @param string $name
     * @param string $password
     * @param integer $id
     * @return User
     */
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

    /**
     * Get user by name
     *
     * @param string $name
     * @return User|null
     */
    public function getUser(string $name): ?User
    {
        return $this->user
            ->where('name', $name)
            ->first();
    }

    /**
     * Get user by id
     *
     * @param integer $id
     * @return User|null
     */
    public function getUserById(int $id): ?User
    {
        return $this->user
            ->where('id', $id)
            ->first();
    }

    /**
     * Validate of user password
     *
     * @param string $name
     * @param string $password
     * @return User|null
     */
    public function checkUser(string $name, string $password): ?User
    {
        $user = $this->user
            ->where('name', $name)
            ->first();

        if (Hash::check($password, $user->password)) {
            return $user;
        }

        return null;
    }

    /**
     * All of user list
     *
     * @return Collection|null
     */
    public function getUserlist(): ?Collection
    {
        return $this->user
            ->whereHas('roles', fn ($query) => $query->where('attribute', RoleConstant::STAFF))
            ->get();
    }
}
