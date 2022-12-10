<?php

namespace App\Order;

use App\Models\NRC;
use App\Models\Item;
use App\Models\Order;
use App\Models\ItemCategory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Collection;

class OrderService
{
    public function __construct(
        protected NRC $nrc,
        protected Order $order,
        protected Item $item
    ) {
    }

    public function getNRC(): ?Collection
    {
        return Cache::rememberForever('nrcs', function () {
            return $this->nrc
                ->get();
        });
    }

    public function checkBuyer(string $name, string $nrc): ?Order
    {
        return $this->order
            ->where('buyer_name', $name)
            ->where('nrc_numbers', $nrc)
            ->first();
    }

    public function createOrder(Item $item, array $data): ?Order
    {
        return DB::transaction(function () use ($item, $data) {
            $this->item
                ->where('id', $item->id)
                ->update([
                    'order_qty' => $item->order_qty + 1
                ]);

            return $this->order->create(
                [
                    'item_category_id' => $item?->category?->id,
                    'item_id' => $item->id,
                    'buyer_name' => $data['buyer_name'],
                    'father_name' => $data['father_name'],
                    'nrc_numbers' => $data['nrc_numbers'],
                    'address' => $data['address'],
                    'phone_number' => $data['phone_number'],
                    'purchase_reason' => $data['purchase_reason'],
                    'monthly_income' => $data['monthly_income'],
                    'already_ordered' => $data['already_ordered'],
                    'term_condition' => $data['term_condition'],
                ]
            );
        });
    }

    public function getOrder(int $id): ?Order
    {
        return $this->order
            ->with('item')
            ->where('id', $id)
            ->first();
    }
}
