<?php

namespace App\Http\Controllers;

use App\Models\Bider;
use App\Item\ItemService;
use App\Sale\BiderService;
use App\Sale\AuctionService;
use Illuminate\Http\Request;
use App\Constants\AuctionConstant;
use Carbon\Carbon;

class AuctionController extends Controller
{
    public function __construct(
        protected AuctionService $auction,
        protected BiderService $bider,
        protected ItemService $item
    ) {
    }

    public function issueForm(Request $request)
    {
        $this->validate(
            $request,
            [
                'bider_id' => 'required|int',
                //'auction_date' => 'required|date|date_format:Y-m-d|after:yesterday',
                'qty' => 'required|int'
            ]
        );
        $bider = $this->bider->getBiderById($request->input('bider_id'));

        if (!$bider) {
            return response()->json(
                [
                    'message' => __('bider information not found')
                ],
                404
            );
        }

        $res = $this->auction->registerForms($bider, $request->input('qty', 0));

        return response()->json(
            $res ?
                ['data' => []] :
                ['message' => 'bider issue form failed'],
            $res ? 200 : 406
        );
    }

    public function store(Request $request)
    {
        $this->validate(
            $request,
            [
                'bider_id' => 'required|int',
                'item_id' => 'required|int',
                'price' => 'required'
            ]
        );

        $now = Carbon::now();
        if (!($now->toTimeString() >= config('auction.start_time')) && !($now->toTimeString() <= config('auction.end_time'))) {
            return response()->json(
                [
                    'message' => __('can not auction in current')
                ],
                406
            );
        }

        $bider = $this->bider->getBiderById($request->input('bider_id'));

        if (!$bider) {
            return response()->json(
                [
                    'message' => __('bider information not found')
                ],
                404
            );
        }

        $item = $this->item->getItemById($request->input('item_id'));

        if (!$item) {
            return response()->json(
                [
                    'message' => __('item not found')
                ],
                404
            );
        }

        if (!$item?->category?->is_auction) {
            return response()->json(
                [
                    'message' => __('can not biding to this item')
                ],
                406
            );
        }

        if (!(Carbon::parse($item->available_date) >= $now)) {
            return response()->json(
                [
                    'message' => __('can not auction to this item in current')
                ],
                406
            );
        }

        $available = $this->auction->getAuctionByBider($bider);
        if (!$available) {
            return response()->json(
                [
                    'message' => __('available auction exceed')
                ],
                406
            );
        }

        if ($auction = $this->auction->createAuction(
            bider: $bider,
            item: $item,
            id: $available?->id,
            data: [
                'price' => $request->input('price'),
                'status' => AuctionConstant::BIDED
            ]
        )) {
            return response()->json(
                [
                    'data' => $auction
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('auction failed')
            ],
            406
        );
    }
}
