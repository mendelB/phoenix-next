<?php

namespace App\Http\Controllers;

use App\Services\Rogue;
use Illuminate\Http\Request;
use App\Services\PhoenixLegacy;

class SignupController extends Controller
{
    /**
     * SignupController constructor.
     *
     * @todo once Rogue is ready, this will all change to request
     * Signups from Rogue instead of PhoenixLegacy.
     */
    public function __construct(PhoenixLegacy $phoenixLegacy, Rogue $rogue)
    {
        $this->phoenixLegacy = $phoenixLegacy;
        $this->rogue = $rogue;

        $this->middleware('auth', ['only' => 'store']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json($this->phoenixLegacy->getAllSignups($request->query()));
    }

    /**
     * Get the total signups for this campaign.
     *
     * @param  int $campaignId
     * @return \Illuminate\Http\Response
     */
    public function total($campaignId)
    {
        // Count = 1 is a hack to make the API actually return something. Don't ask.
        return response()->json($this->phoenixLegacy->getAllSignupsCached(['campaigns' => $campaignId, 'count' => 1]));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    public function store(Request $request)
    {
        // dd("hiiii");
        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA'
        ]);
        // $this->validate($request, [
        //     'campaignId' => 'required',
        //     'campaignRunId' => 'required',
        // ]);

        // return $this->rogue->storeSignup(
        //     auth()->id(),
        //     $request->input('campaignId'),
        //     $request->input('campaignRunId'),
        //     'phoenix-next',
        //     $request->input('details')
        // );

        // return $this->phoenixLegacy->storeSignup(
        //     auth()->id(),
        //     $request->input('campaignId'),
        //     'phoenix-next'
        // );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json($this->phoenixLegacy->getSignup($id));
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
