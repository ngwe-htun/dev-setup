<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NRC extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */

    protected $table = 'nrcs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nrc_code',
        'township_mm',
        'township_en',
    ];
}
