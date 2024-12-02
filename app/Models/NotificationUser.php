<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificationUser extends Model
{
    use HasFactory;

    protected $fillable = ['id_notification', 'id_user', 'seen', 'date_seen'];

    public function notification()
    {
        return $this->belongsTo(Notification::class, 'id_notification');
    }
}
