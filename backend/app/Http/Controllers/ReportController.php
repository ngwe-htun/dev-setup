<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Sale\CityService;
use App\Admin\RoleService;
use Illuminate\Http\Request;
use App\Report\ReportService;
use App\Constants\RoleConstant;
use App\Sale\OrderService;

class ReportController extends Controller
{
    public function __construct(
        protected ReportService $report,
        protected CityService $city,
        protected RoleService $role, //* dependency inject to parent controller
        protected OrderService $order
    ) {
    }

    public function cities()
    {
        return response()->json(
            [
                'data' => $this->city->getAllCities()
            ],
            200
        );
    }
    public function search(Request $request)
    {
        //* purposely request with json payload and validate cover for the unicode string
        $this->validate(
            $request,
            [
                'name' => 'required|string'
            ]
        );

        //TODO need to merged the data both of order and auction after the finish of auction
        $orders = $this->order->getOrderByName($request->input('name'));
        if ($orders) {
            return response()->json(
                [
                    'data' => $orders
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('data not found')
            ],
            404
        );
    }

    public function order(Request $request)
    {
        $this->validate(
            $request,
            [
                'start_date' => 'required|datetime',
                'end_date' => 'required|datetime'
            ]
        );

        $citiesId = $this->city->getAllCities()?->pluck('id')->toArray();
        if (!$this->permission()) {
            $roles = $request->user()->roles;
            $citiesId = explode(',', $roles?->firstWhere('attribute', RoleConstant::AVAILABLE_CITIES));
        }

        if (
            $orders = $this->report->reportOrder(
                cities: $citiesId,
                startDate: Carbon::parse($request->input('start_date')),
                endDate: Carbon::parse($request->input('end_date')),
                limit: $request->input('limit', 30)
            )
        ) {
            return response()->json(
                [
                    'data' => $orders
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('data not found')
            ],
            404
        );
    }
}
