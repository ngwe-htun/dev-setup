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

    protected $table = 'user_roles';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'attribute',
        'value',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
