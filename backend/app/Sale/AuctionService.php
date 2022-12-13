<?php

namespace App\Sale;

use App\Constants\AuctionConstant;
use App\Models\Item;
use App\Models\Bider;
use App\Models\Auction;

class AuctionService
{
    public function __construct(
        protected Auction $auction,
        protected Bider $bider,
    ) {
    }

    public function createAuction(Bider $bider, array $data, int $id = 0, ?Item $item = null): ?Auction
    {
        return $this->auction->updateOrCreate(
            [
                'id' => $id
            ],
            [
                'bider_id' => $bider?->id,
                'item_id' => $item?->id ?: -1,
                'item_category_id' => $item?->category?->id ?: -1,
                'log_number' => $item?->log_number ?: '',
                'biding_price' => isset($data['price']) ?: 0,
                'status' => $data['status']
            ]
        );
    }

    public function getAuctionByBider(Bider $bider, bool $status = AuctionConstant::REGISTER): ?Auction
    {
        return $this->auction
            ->where('bider_id', $bider?->id)
            ->where('status', $status)
            ->first();
    }
}
