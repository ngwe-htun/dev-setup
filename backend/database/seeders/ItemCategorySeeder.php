<?php

namespace Database\Seeders;

use App\Models\ItemCategory;
use Illuminate\Database\Seeder;

class ItemCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $itemCategories = [
            [
                'name_en' => 'gold_coin',
                'name_mm' => 'ရွှေဒင်္ဂါး'
            ],
            [
                'name_en' => 'gold_bar',
                'name_mm' => 'ရွှေချောင်း'
            ],
            [
                'name_en' => 'jade',
                'name_mm' => 'ကျောက်စိမ်း'
            ],
            [
                'name_en' => 'gem',
                'name_mm' => 'ကျောက်မြတ်'
            ]
        ];

        foreach ($itemCategories as $category) {
            ItemCategory::create([
                'name_en' => $category['name_en'],
                'name_mm' => $category['name_mm'],
                'status' => true
            ]);
        }
    }
}
