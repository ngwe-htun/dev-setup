<?php

namespace App\Report;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\ItemCategory;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ReportService
{
    public function __construct(
        protected Order $order
    ) {
    }

    public function reportOrder(array $cities, Carbon $startDate, Carbon $endDate, ?ItemCategory $category = null, int $limit = 30): ?LengthAwarePaginator
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
            ->paginate($limit);
    }
}
