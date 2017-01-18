<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use DoSomething\Gateway\Contracts\NorthstarUserContract;
use DoSomething\Gateway\Laravel\HasNorthstarToken;

class User extends Authenticatable
{
    use Authenticatable, HasNorthstarToken;
}
