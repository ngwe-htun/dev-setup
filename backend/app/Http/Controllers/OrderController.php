<?php

namespace App\Http\Controllers;

use App\Item\ItemService;
use App\Sale\OrderService;
use Illuminate\Http\Request;
use App\Item\CategoryService;
use Carbon\Carbon;

class OrderController extends Controller
{
    public function __construct(
        protected OrderService $order,
        protected CategoryService $category,
        protected ItemService $item
    ) {
    }

    public function getNRC()
    {
        return response()->json(
            [
                'data' => $this->order->getNRC()
            ],
            200
        );
    }

    public function checkBuyer(Request $request)
    {
        $this->validate(
            $request,
            [
                'buyer_name' => 'required|string',
                'nrc' => 'required|string'
            ]
        );

        if ($this->order->checkBuyer($request->input('buyer_name'), $request->input('nrc'))) {
            return response()->json(
                [
                    'message' => __('your already ordered')
                ],
                406
            );
        }

        return response()->json(
            [
                'data' => [],
            ],
            200
        );
    }

    public function show(int $id)
    {
        $order = $this->order->getOrder($id);
        if (!$order) {
            return response()->json(
                [
                    'message' => __('order not found')
                ],
                404
            );
        }

        return response()->json(
            [
                'data' => $order
            ],
            200
        );
    }

    public function store(Request $request)
    {
        $this->validate(
            $request,
            [
                'item_id' => 'required|int',
                'buyer_name' => 'required|string',
                'father_name' => 'required|string',
                'nrc' => 'required|string',
                'address' => 'required|string',
                'phone' => 'required|string|min:9|max:9',
                'purchase_reason' => 'required|string',
                'monthly_income' => 'required',
                'already_ordered' => 'required',
                'term_condition' => 'required'
            ]
        );

        if ($this->order->checkBuyer($request->input('buyer_name'), $request->input('nrc'))) {
            return response()->json(
                [
                    'message' => __('your already ordered')
                ],
                406
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

        if (Carbon::now()->diffInDays(Carbon::parse($item->available_date)) > 0) {
            return response()->json(
                [
                    'message' => __('your order is out of date')
                ],
                406
            );
        }

        if (($item->qty - $item->order_qty) <= 0) {
            return response()->json(
                [
                    'message' => __('out of stock item')
                ],
                406
            );
        }

        $data = [
            'buyer_name' => $request->input('buyer_name'),
            'father_name' => $request->input('father_name'),
            'nrc_numbers' => $request->input('nrc'),
            'address' => $request->input('address'),
            'phone_number' => $request->input('phone'),
            'purchase_reason' => $request->input('purchase_reason'),
            'monthly_income' => $request->input('monthly_income'),
            'already_ordered' => $request->input('already_ordered'),
            'term_condition' => $request->input('term_condition')
        ];

        if ($order = $this->order->createOrder($item, $data)) {
            return response()->json(
                [
                    'data' => $order
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('ordered failed')
            ],
            406
        );
    }
}
