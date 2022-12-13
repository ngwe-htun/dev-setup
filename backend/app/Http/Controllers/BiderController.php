<?php

namespace App\Http\Controllers;

use App\Sale\BiderService;
use Illuminate\Http\Request;

class BiderController extends Controller
{
    public function __construct(
        protected BiderService $bider
    ) {
    }

    public function store(Request $request)
    {
        $this->validate(
            $request,
            [
                'reg_number' => 'required|string',
                'name' => 'required|string',
                'company' => 'required|string',
                'country' => 'required|string'
            ]
        );

        if ($this->bider->getBider(regNumber: $request->input('reg_number'))) {
            return response()->json(
                [
                    'message' => __('reg number already exists')
                ],
                406
            );
        }

        if ($bider = $this->bider->createBider(
            [
                'reg_number' => $request->input('reg_number'),
                'name' => $request->input('name'),
                'company' => $request->input('company'),
                'country' => $request->input('country')
            ]
        )) {
            return response()->json(
                [
                    'data' => $bider
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('create bider information failed')
            ],
            406
        );
    }

    public function index()
    {
        return response()->json(
            [
                'data' => $this->bider->biderList()
            ],
            200
        );
    }

    public function show(Request $request)
    {
        $this->validate(
            $request,
            [
                'name' => 'required_without:reg_number,company|string',
                'company' => 'required_without:reg_number,name|string',
                'reg_number' => 'required_without:name,company|string'
            ]
        );

        if ($bider = $this->bider->getBider(
            regNumber: $request->input('reg_number', null),
            name: $request->input('name', null),
            company: $request->input('company', null)
        )) {
            return response()->json(
                [
                    'data' => $bider
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('bider information not found')
            ],
            404
        );
    }
}
