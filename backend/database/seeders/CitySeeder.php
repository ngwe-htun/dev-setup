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
                'display_name' => 'ရန်ကုန်(Yangon)'
            ],
            [
                'name' => 'mandalay',
                'display_name' => 'မန္တလေး(Mandalay)'
            ],
            [
                'name' => 'naypyidaw',
                'display_name' => 'နေပြည်တော်(Naypyidaw)'
            ]
        ];

        foreach ($cities as $city) {
            City::create($city);
        }
    }
}
