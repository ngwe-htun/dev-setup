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

    public function checkAvailableItem(ItemCategory $category, Carbon $date): ?Item
    {
        return $this->item
            ->where('item_category_id', $category->id)
            ->whereDate('available_date', $date->toDateString())
            ->WhereRaw('(qty - order_qty) > 0')
            ->first();
    }

    public function getItemByLog(string $logNumber, Carbon $date): ?Item
    {
        return $this->item
            ->where('log_number', $logNumber)
            ->whereDate('available_date', '>=', $date->toDateString())
            ->first();
    }

    public function getCategoryItem(ItemCategory $category, City $city, Carbon $date): ?Item
    {
        return $this->item
            ->where('item_category_id', $category->id)
            ->where('city_id', $city->id)
            ->whereDate('available_date', $date->toDateString())
            ->first();
    }

    public function getItemsByCategory(ItemCategory $category): ?Collection
    {
        return $this->item
            ->with('category')
            ->with('category.parentCategory')
            ->whereDate('available_date', '>=', Carbon::now())
            ->get();
    }

    public function getItemById(int $id): ?Item
    {
        return $this->item
            ->where('id', $id)
            ->with('category')
            ->with('city')
            ->first();
    }
}
