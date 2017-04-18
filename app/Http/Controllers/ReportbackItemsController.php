<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PhoenixLegacy;

class ReportbackItemsController extends Controller
{
    /**
     * ReportbackController constructor.
     *
     * @todo once Rogue is ready, this will all change to request
     * Reportbacks from Rogue instead of PhoenixLegacy.
     */
    public function __construct(PhoenixLegacy $phoenixLegacy)
    {
        $this->phoenixLegacy = $phoenixLegacy;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json($this->phoenixLegacy->getAllReportbackItems($request->query()));
    }
}
