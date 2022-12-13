<?php

namespace App\Http\Controllers;

use App\Sale\AuctionService;
use App\Sale\BiderService;
use Illuminate\Http\Request;

class AuctionController extends Controller
{
    public function __construct(
        protected AuctionService $auction,
        protected BiderService $bider
    ) {
    }

    public function store(Request $request)
    {
        $this->validate(
            $request,
            []
        );

        $bider = $this->bider->getBider(regNumber: $request->input('bider_reg_number'));

        if (!$bider) {
            return response()->json(
                [
                    'message' => __('bider information not found')
                ],
                404
            );
        }
    }
}
