<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Sale\CityService;
use App\Admin\RoleService;
use App\Sale\BiderService;
use App\Sale\OrderService;
use App\Sale\AuctionService;
use Illuminate\Http\Request;
use App\Report\ReportService;
use App\Constants\RoleConstant;
use App\Constants\AuctionConstant;

class ReportController extends Controller
{
    public function __construct(
        protected ReportService $report,
        protected CityService $city,
        protected RoleService $role, //* dependency inject to parent controller
        protected OrderService $order,
        protected BiderService $bider,
        protected AuctionService $auction
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
                'name' => 'required_without:bider_reg_number|string',
                'bider_reg_number' => 'required_without:name|string',
            ]
        );

        if (!empty($request->input('bider_reg_number', ''))) {
            return $this->searchAuction($request->input('bider_reg_number'));
        }

        return $this->searchOrder($request->input('name'));
    }

    private function searchOrder(string $name)
    {
        $orders = $this->order->getOrderByName($name);
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

    private function searchAuction(string $regNumber)
    {
        $bider = $this->bider->getBider(regNumber: $regNumber);
        if ($auctions = $this->auction->getAuctionsByBider($bider, AuctionConstant::BIDED)) {
            return response()->json(
                [
                    'data' => $auctions
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
                'start_date' => 'required|date',
                'end_date' => 'required|date'
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
                endDate: Carbon::parse($request->input('end_date'))
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

    public function auction(Request $request)
    {
        $this->validate(
            $request,
            [
                'start_date' => 'required|date',
                'end_date' => 'required|date'
            ]
        );

        if (!$this->permission()) {
            $roles = $request->user()->roles;
        }

        if (
            $auctions = $this->report->reportAuction(
                startDate: Carbon::parse($request->input('start_date')),
                endDate: Carbon::parse($request->input('end_date'))
            )
        ) {
            return response()->json(
                [
                    'data' => $auctions
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
