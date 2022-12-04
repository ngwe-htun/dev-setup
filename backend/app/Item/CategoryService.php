<?php

namespace App\Item;

use App\Models\ItemCategory;
use Illuminate\Database\Eloquent\Collection;

class CategoryService
{
    public function __construct(
        protected ItemCategory $category
    ) {
    }

    public function createCategory(ItemCategory $parent, string $nameEn, string $nameMM): ItemCategory
    {
        return $this->category
            ->create([
                'name_en' => $nameEn,
                'name_mm' => $nameMM,
                'status' => true,
                'item_category_id' => $parent->id
            ]);
    }

    public function getCategoryByEn(string $nameEn): ?ItemCategory
    {
        return $this->category
            ->where('name_en', $nameEn)
            ->first();
    }

    public function getChildCategories(ItemCategory $category): ?Collection
    {
        return $this->category
            ->where('item_category_id', $category->id)
            ->get();
    }
}
