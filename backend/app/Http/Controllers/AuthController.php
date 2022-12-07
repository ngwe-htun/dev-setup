<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Admin\RoleService;
use App\Admin\UserService;
use App\Constants\RoleConstant;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function __construct(
        protected UserService $user,
        protected RoleService $role
    ) {
    }

    public function create(Request $request)
    {
        $this->validate(
            $request,
            [
                'name' => 'required|string'
            ]
        );

        $name = $request->input('name', '');

        if ($this->user->getUser($name)) {
            return response()->json(
                [
                    'message' => __('user already exists in system')
                ],
                406
            );
        }

        $password = Str::random(8);
        if ($user = $this->user->createUser($name, Hash::make($password))) {
            return response()->json(
                [
                    'data' => [
                        'name' => $user->name,
                        'password' => $password
                    ]
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


        return response()->json(
            [
                'data' => $request->user()->createToken(
                    name: 'api_token',
                    expiresAt: Carbon::now()->addMinutes(config('sanctum.expiration'))
                )->plainTextToken
            ],
            200
        );
    }

    public function getRoles()
    {
        return response()->json(
            [
                'data' => RoleConstant::getValues()
            ],
            200
        );
    }

    public function assignRole(Request $request)
    {
        $this->validate(
            $request,
            [
                'user_id' => 'required|int',
                'attribute' => 'required|string',
                'value' => 'required|string'
            ]
        );

        $user = $this->user->getUserById($request->input('user_id'));

        if (!$user) {
            return response()->json(
                [
                    'message' => __('user not found')
                ],
                404
            );
        }

        if (!$this->permission()) {
            return response()->json(
                [
                    'message' => __('permission denied')
                ],
                401
            );
        }

        $role = $request->input('attribute');
        if (!in_array($role, RoleConstant::getValues())) {
            return response()->json(
                [
                    'message' => __('assign role is not found')
                ],
                404
            );
        }

        if ($assigned = $this->role->createRole($user, RoleConstant::fromValue($role), $request->input('value'))) {
            return response()->json(
                [
                    'data' => $assigned
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('user can not assign')
            ],
            406
        );
    }

    public function resetPassword(Request $request)
    {
        $this->validate(
            $request,
            [
                'user_id' => 'required|int'
            ]
        );

        if (!$this->permission()) {
            return response()->json(
                [
                    'message' => __('permission denied')
                ],
                401
            );
        }

        $user = $this->user->getUserById($request->input('user_id'));

        if (!$user) {
            return response()->json(
                [
                    'message' => __('user not found')
                ],
                404
            );
        }

        $password = Str::random(8);
        if ($user = $this->user->createUser($user->name, Hash::make($password), $user->id)) {
            return response()->json(
                [
                    'data' => [
                        'name' => $user->name,
                        'password' => $password
                    ]
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('reset password failed')
            ],
            406
        );
    }

    private function permission(): bool
    {
        if (
            !$this->role->checkPermission(RoleConstant::ADMIN()) &&
            !$this->role->checkPermission(RoleConstant::SUPER_ADMIN())
        ) {
            return false;
        }
        return true;
    }
}
