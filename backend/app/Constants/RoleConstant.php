<?php

namespace App\Constants;

use BenSampo\Enum\Enum;

class RoleConstant extends Enum
{
    public const SUPER_ADMIN = 'super_admin';
    public const ADMIN = 'admin';
    public const STAFF = 'staff';
    public const AVAILABLE_CITIES = 'available_cities';
}
