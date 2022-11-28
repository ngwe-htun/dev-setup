<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    /**
     * The database table used by the model.
     *
     * @var string
     */

    protected $table = 'roles';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'attribute',
        'value',
    ];

    public function user()
    {
        return $this->hasMany(User::class, 'role_id');
    }
}
