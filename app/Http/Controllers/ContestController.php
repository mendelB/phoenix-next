<?php

namespace App\Http\Controllers;

use App\Services\Gladiator;
use Illuminate\Http\Request;

class ContestController extends Controller
{
    /**
     * The Gladiator API.
     *
     * @var Gladiator
     */
    private $gladiator;

    /**
     * ContestController constructor.
     *
     * @param Gladiator $gladiator
     */
    public function __construct(Gladiator $gladiator)
    {
        $this->gladiator = $gladiator;

        $this->middleware('auth', ['only' => ['store']]);
    }

    /**
     * Store a user in a contest.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function userStore(Request $request)
    {
        $this->validate($request, [
            'legacyCampaignId' => 'required',
            'legacyCampaignRunId' => 'required',
        ]);

        return $this->gladiator->storeUserInContest(
            auth()->id(),
            $request->input('legacyCampaignId'),
            $request->input('legacyCampaignRunId')
        );
    }

    /**
     * Display a listing of contest users.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function userIndex(Request $request)
    {
        return response()->json($this->gladiator->getAllUsers($request->query()));
    }
}
