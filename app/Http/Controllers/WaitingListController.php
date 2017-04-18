<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WaitingListUser;

class WaitingListController extends Controller
{
    /**
     * Store a users email.
     *
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);

        WaitingListUser::firstOrCreate([
           'email' => $request->input('email'),
        ]);

        return redirect('/')->with('flash_message', 'Thanks! We\'ll let you know when we lauch.');
    }
}
