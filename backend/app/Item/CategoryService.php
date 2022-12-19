<?php

namespace App\Item;

use Carbon\Carbon;
use App\Models\ItemCategory;
use Illuminate\Database\Eloquent\Collection;

class CategoryService
{
    public function __construct(
        protected ItemCategory $category
    ) {
    }

    /**
     * Create the sub category
     *
     * @param ItemCategory $parent
     * @param string $nameEn
     * @param string $nameMM
     * @return ItemCategory
     */
    public function createCategory(ItemCategory $parent, string $nameEn, string $nameMM): ItemCategory
    {
        return $this->category
            ->create([
                'name_en' => $nameEn,
                'name_mm' => $nameMM,
                'status' => true,
                'is_auction' => $parent->is_auction,
                'item_category_id' => $parent->id
            ]);
    }

    /**
     * Get the category by en name
     *
     * @param string $nameEn
     * @return ItemCategory|null
     */
    public function getCategoryByEn(string $nameEn): ?ItemCategory
    {
        return $this->category
            ->where('name_en', $nameEn)
            ->first();
    }

    /**
     * Fetch all of child categories by parent category
     *
     * @param ItemCategory $category
     * @return Collection|null
     */
    public function getChildCategories(ItemCategory $category): ?Collection
    {
        return $this->category
            ->where('item_category_id', $category->id)
            ->get();
    }

    /**
     * Get category by id
     *
     * @param integer $id
     * @return ItemCategory|null
     */
    public function getCategoryById(int $id): ?ItemCategory
    {
        return $this->category
            ->where('id', $id)
            ->first();
    }

    /**
     * List of parent category
     * parent category can't create from the admin panel
     * those data created with seeder
     *
     * @return Collection|null
     */
    public function getParentCategory(): ?Collection
    {
        return $this->category
            ->where('item_category_id', -1)
            ->get();
    }

    /**
     * List all of child categories
     *
     * @return Collection|null
     */
    public function getCategories(): ?Collection
    {
        return $this->category
            ->where('item_category_id', '!=', -1)
            ->get();
    }

    /**
     * Check available categories
     *
     * @return Collection|null
     */
    public function availableCategories(): ?Collection
    {
        return
            $this->category
            ->with('parentCategory')
            ->whereHas('items', fn ($query) => $query->whereDate('available_date', '>=', Carbon::now()))
            ->get();
    }

    /**
     * Delete Category
     * can't delete the category if belong to order or auction
     *
     * @param ItemCategory $category
     * @return boolean
     */
    public function deleteCategory(ItemCategory $category): bool
    {
        if (!$category->orders || !$category->auctions) {
            return $this->category
                ->where('id', $category->id)
                ->delete();
        }

        return false;
    }
}
