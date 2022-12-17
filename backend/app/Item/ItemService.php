<?php

namespace App\Item;

use Carbon\Carbon;
use App\Models\City;
use App\Models\Item;
use App\Models\ItemCategory;
use Illuminate\Database\Eloquent\Collection;

class ItemService
{
    public function __construct(
        protected ItemCategory $category,
        protected Item $item
    ) {
    }

    /**
     * Create item
     *
     * @param ItemCategory $category
     * @param City $city
     * @param Carbon $availableDate
     * @param array $data
     * @return Item|null
     */
    public function createItem(ItemCategory $category, City $city, Carbon $availableDate, array $data): ?Item
    {
        return $this->item->create([
            'item_category_id' => $category->id,
            'city_id' => $city->id,
            'log_number' => isset($data['log_number']) ? $data['log_number'] : '',
            'base_price' => $data['base_price'],
            'sellable_currency' => $data['sellable_currency'],
            'available_date' => $availableDate->toDateTimeString(),
            'qty' => $data['qty'],
        ]);
    }

    /**
     * Item stock checking
     *
     * @param ItemCategory $category
     * @param Carbon $date
     * @return Item|null
     */
    public function checkAvailableItem(ItemCategory $category, Carbon $date): ?Item
    {
        return $this->item
            ->where('item_category_id', $category->id)
            ->whereDate('available_date', $date->toDateString())
            ->WhereRaw('(qty - order_qty) > 0')
            ->first();
    }

    /**
     * Item by log number
     *
     * @param string $logNumber
     * @param Carbon $date
     * @return Item|null
     */
    public function getItemByLog(string $logNumber, Carbon $date): ?Item
    {
        return $this->item
            ->where('log_number', $logNumber)
            ->whereDate('available_date', '>=', $date->toDateString())
            ->first();
    }

    /**
     * Item by category and city
     *
     * @param ItemCategory $category
     * @param City $city
     * @param Carbon $date
     * @return Item|null
     */
    public function getCategoryItem(ItemCategory $category, City $city, Carbon $date): ?Item
    {
        return $this->item
            ->where('item_category_id', $category->id)
            ->where('city_id', $city->id)
            ->whereDate('available_date', $date->toDateString())
            ->first();
    }

    /**
     * Items by category for listing
     *
     * @param ItemCategory $category
     * @return Collection|null
     */
    public function getItemsByCategory(ItemCategory $category): ?Collection
    {
        return $this->item
            ->with('category')
            ->with('category.parentCategory')
            ->where('item_category_id', $category?->id)
            ->whereDate('available_date', '>=', Carbon::now())
            ->get();
    }

    /**
     * Item by id
     *
     * @param integer $id
     * @return Item|null
     */
    public function getItemById(int $id): ?Item
    {
        return $this->item
            ->where('id', $id)
            ->with('category')
            ->with('city')
            ->first();
    }

    /**
     * Delete item
     * can't delete the item if belong to order or auction
     *
     * @param Item $item
     * @return boolean|null
     */
    public function deleteItem(Item $item): ?bool
    {
        if (!$item->orders || !$item->auctions) {
            return $this->item
                ->where('id', $item->id)
                ->delete();
        }
        return false;
    }
}
