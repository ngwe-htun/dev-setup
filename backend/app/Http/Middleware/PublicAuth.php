<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;

class PublicAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if ($token = $request->header('Authorization')) {
            $key = str_replace('\\', '', explode(' ', $token)[1]);
            if ($token = Cache::get('public_auth_' . $key)) {
                if (Hash::check($key, $token)) {
                    return $next($request);
                }
            }
        }

        return response()->json(
            [
                'message' => __('unauthorize request')
            ],
            401
        );
    }
}
