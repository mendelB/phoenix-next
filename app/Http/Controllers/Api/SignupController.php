<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\PhoenixLegacy;
use Illuminate\Http\Request;

class SignupController extends Controller
{
    /**
     * SignupController constructor.
     *
     * @todo once Rogue is ready, this will all change to request
     * Signups from Rogue instead of PhoenixLegacy.
     */
    public function __construct(PhoenixLegacy $phoenixLegacy)
    {
        $this->phoenixLegacy = $phoenixLegacy;

        $this->middleware('api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $signups = remember($this->makeCacheKeyFromRequest(), 30, function() {
            return $this->phoenixLegacy->getAllSignups(request()->query());
        });

        return response()->json($signups);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->phoenixLegacy->storeSignup(
            $request->input('user_id'),
            $request->input('campaign_id'),
            $request->input('source')
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $signup = remember($this->makeCacheKeyFromRequest(), 30, function() use ($id) {
            return $this->phoenixLegacy->getSignup($id);
        });

        return response()->json($signup);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return '@todo update signup';
    }
}
