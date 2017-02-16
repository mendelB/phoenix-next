<?php

namespace App\Http\Controllers;

use App\Repositories\CampaignRepository;
use App\Services\PhoenixLegacy;

class CampaignController extends Controller
{
    /**
     * The campaign repository.
     *
     * @var CampaignRepository
     */
    protected $campaignRepository;

    /**
     * The legacy Phoenix API.
     *
     * @var PhoenixLegacy
     */
    private $phoenixLegacy;

    /**
     * Make a new CampaignController, inject dependencies,
     * and set middleware for this controller's methods.
     *
     * @param CampaignRepository $campaignRepository
     * @param PhoenixLegacy $phoenixLegacy
     */
    public function __construct(CampaignRepository $campaignRepository, PhoenixLegacy $phoenixLegacy)
    {
        $this->campaignRepository = $campaignRepository;
        $this->phoenixLegacy = $phoenixLegacy;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $campaigns = $this->campaignRepository->getAll();

        return view('campaigns.index', ['campaigns' => $campaigns]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $campaign = $this->campaignRepository->findBySlug($slug);
        $phoenixNid = data_get($campaign, 'legacy_campaign_id', '1144');

        $response = $this->phoenixLegacy->getAllReportbacks(['campaigns' => $phoenixNid, 'status' => 'promoted']);

        $reportbacks = collect($response['data'])->pluck('reportback_items.data')->flatten(1);

        return view('campaigns.show', ['campaign' => $campaign, 'reportbacks' => $reportbacks]);
    }
}
