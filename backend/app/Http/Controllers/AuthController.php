<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Admin\RoleService;
use App\Admin\UserService;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Constants\RoleConstant;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function __construct(
        protected UserService $user,
        protected RoleService $role
    ) {
    }

    public function index()
    {
        if (!$this->permission()) {
            return response()->json(
                [
                    'message' => __('permission denied')
                ],
                401
            );
        }

        if ($users = $this->user->getUserlist()) {
            return response()->json(
                [
                    'data' => $users
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('users not found')
            ],
            404
        );
    }

    public function store(Request $request)
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
                        'id' => $user->id,
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
                'data' => [
                    'token_info' => $request->user()->createToken(
                        name: 'api_token',
                        abilities: array_merge($this->role->getRoles($request->user())?->toArray()),
                        expiresAt: Carbon::now()->addMinutes(config('sanctum.expiration'))
                    ),
                    'user_info' => $request->user()
                ]
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

    public function changePass(Request $request)
    {
        $this->validate(
            $request,
            [
                'name' => 'required|string',
                'password' => 'required|string',
                'new_password' => 'required|string',
                'confirm_password' => 'required|string|same:new_password',
            ]
        );

        $user = $this->user->checkUser($request->input('name'), $request->input('password'));
        if (!$user) {
            return response()->json(
                [
                    'message' => __('wrong password')
                ],
                401
            );
        }

        if ($this->user->createUser($user?->name, Hash::make($request->input('new_password')), $user?->id)) {
            return response(
                [
                    'data' => $user,
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('password reset failed')
            ],
            406
        );
    }
}
