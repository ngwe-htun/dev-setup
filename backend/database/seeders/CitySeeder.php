<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = [
            [
                'name' => 'yangon',
                'display_name' => 'Yangon'
            ],
            [
                'name' => 'mandalay',
                'display_name' => 'Mandalay'
            ],
            [
                'name' => 'naypyitaw',
                'display_name' => 'NayPyiTaw'
            ]
        ];

        foreach ($cities as $city) {
            // City::create($city);
        }
    }
}
