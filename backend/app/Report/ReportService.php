<?php

namespace App\Report;

use App\Models\Auction;
use Carbon\Carbon;
use App\Models\Order;
use App\Models\ItemCategory;
use Illuminate\Database\Eloquent\Collection;

class ReportService
{
    public function __construct(
        protected Order $order,
        protected Auction $auction
    ) {
    }

    public function reportOrder(array $cities, Carbon $startDate, Carbon $endDate, ?ItemCategory $category = null): ?Collection
    {
        return $this->order
            ->with('item')
            ->with('category')
            ->with('parentCategory')
            ->with('city')
            ->where(function ($query) use ($startDate, $endDate) {
                $query->whereDate('created_at', '>=', $startDate->toDateString())
                    ->whereDate('created_at', '<=', $endDate->toDateString());
            })
            ->whereIn('city_id', $cities)
            ->when(!empty($category), function ($query) use ($category) {
                $query->where('item_category_id', $category->id);
            })
            ->orderByDesc('id')
            ->get();
    }

    public function reportAuction(Carbon $startDate, Carbon $endDate, ?ItemCategory $category = null): ?Collection
    {
        return $this->auction
            ->with('item')
            ->with('category')
            ->with('parentCategory')
            ->where(function ($query) use ($startDate, $endDate) {
                $query->whereDate('created_at', '>=', $startDate->toDateString())
                    ->whereDate('created_at', '<=', $endDate->toDateString());
            })
            ->when(!empty($category), function ($query) use ($category) {
                $query->where('item_category_id', $category->id);
            })
            ->where('status', 1)
            ->orderByDesc('biding_price')
            ->get();
    }
}
