<?php

namespace App\Http\Controllers;

use App\Admin\RoleService;
use App\Constants\RoleConstant;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function __construct(
        protected RoleService $role
    ) {
    }

    protected function permission(): bool
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
