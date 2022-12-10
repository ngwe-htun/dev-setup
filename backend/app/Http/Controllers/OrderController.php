<?php

namespace App\Http\Controllers;

use App\Item\ItemService;
use App\Order\OrderService;
use Illuminate\Http\Request;
use App\Item\CategoryService;

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

    public function store(Request $request)
    {
        $this->validate(
            $request,
            [
                'item_category_id' => 'required|int',
                'item_id' => 'required|int',
                'buyer_name' => 'required|string',
                'father_name' => 'required|string',
                'nrc' => 'required|string',
                'address' => 'required|string',
                'phone' => 'required|string',
                'purchase_reason' => 'required|string',
                'monthly_income' => 'required',
                'already_ordered' => 'required',
                'term_condition' => 'required'
            ]
        );

        $category = $this->category->getCategoryById($request->input('item_category_id'));

        if (!$category) {
            return response()->json(
                [
                    'message' => __('category not found')
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

        if ($order = $this->order->createOrder($category, $item, $data)) {
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
