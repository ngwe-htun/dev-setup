<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Admin\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function __construct(
        protected User $user
    ) {
    }

    public function create(Request $request)
    {
        $this->validate(
            $request,
            [
                'name' => 'required|string',
                'password' => 'required|string',
            ]
        );

        if ($user = $this->user->createUser($request->input('name'), Hash::make($request->input('password')))) {
            return response()->json(
                [
                    'data' => $user
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __("create user failed")
            ],
            406
        );
    }

    public function login(Request $request)
    {
        $this->validate(
            $request,
            [
                'name' => 'required|string',
                'password' => 'required|string',
            ]
        );

        if (!Auth::attempt($request->only(['name', 'password']))) {
            return response()->json(
                [
                    'message' => __('login failed')
                ],
                401
            );
        }

        if ($user = $this->user->getUser($request->input('name'))) {
            return response()->json(
                [
                    'data' => $user->createToken(name: 'api_token', expiresAt: Carbon::now()->addMinutes(config('sanctum.expiration')))
                ],
                200
            );
        }
    }
}
