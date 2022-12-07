<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Item;
use App\Item\ItemService;
use App\Utils\UtilsService;
use Illuminate\Http\Request;
use App\Item\CategoryService;
use App\Http\Controllers\Controller;

class ItemController extends Controller
{
    public function __construct(
        protected ItemService $item,
        protected CategoryService $category,
        protected UtilsService $utils,
    ) {
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'item_category_id' => 'required|integer',
            'city_id' => 'required|integer',
            'base_price' => 'required|decimal',
            'sellable_currency' => 'required|string',
            'available_date' => 'required|date|date_format:Y-m-d|after:yesterday',
            'qty' => 'required|integer'
        ]);

        $data = [
            'base_price' => $request->input('base_price'),
            'qty' => $request->input('qty'),
            'sellable_currency' => $request->input('sellable_currency')
        ];

        $logNumber = $request->input('log_number', '');

        if (!empty($logNumber)) {
            $data['log_number'] = $logNumber;
        }

        $category = $this->category->getCategoryById($request->input('item_category_id'));

        if (empty($category)) {
            return response()->json(
                [
                    'message' => __('category not found')
                ],
                404
            );
        }

        $city = $this->utils->getCityById($request->input('city_id'));

        if (empty($city)) {
            return response()->json(
                [
                    'message' => __('city not found')
                ],
                404
            );
        }

        if ($item = $this->item->createItem($category, $city, Carbon::parse($request->input('available_date')), $data)) {
            return response()->json(
                [
                    'data' => $item
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('item create failed')
            ],
            406
        );
    }

    public function getCategoryItem(Request $request)
    {
        $this->validate($request, [
            'category_id' => 'required|int',
            'city_id' => 'required|int',
            'date' => 'required|date|date_format:Y-m-d|after:yesterday',
        ]);

        $category = $this->category->getCategoryById($request->input('item_category_id'));

        if (empty($category)) {
            return response()->json(
                [
                    'message' => __('category not found')
                ],
                404
            );
        }

        $city = $this->utils->getCityById($request->input('city_id'));

        if (empty($city)) {
            return response()->json(
                [
                    'message' => __('city not found')
                ],
                404
            );
        }

        if ($item = $this->item->getCategoryItem($category, $city, $request->input('date'))) {
            if (($item?->qty - $item?->order_qty) <= 0) {
                return response()->json(
                    [
                        'message' => __('item stock not available')
                    ],
                    404
                );
            }
            return response()->json(
                [
                    'data' => $item
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('item not found')
            ],
            404
        );
    }
}
