<?php

namespace Database\Seeders;

use App\Constants\RoleConstant;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'gold_dev',
            'password' => Hash::make('mm601D'),
        ]);

        Role::create(
            [
                'user_id' => $user->id,
                'attribute' => RoleConstant::SUPER_ADMIN,
                'value' => 1
            ]
        );

        $user = User::create([
            'name' => 'admin',
            'password' => Hash::make('mmG01d0rd8r2022'),
        ]);

        Role::create(
            [
                'user_id' => $user->id,
                'attribute' => RoleConstant::ADMIN,
                'value' => 1
            ]
        );
    }
}
