<?php

namespace App\Http\Controllers;

use App\Repositories\CampaignRepository;

class CampaignController extends Controller
{
    /**
     * The campaign repository.
     *
     * @var CampaignRepository
     */
    protected $campaignRepository;

    /**
     * Make a new CampaignController, inject dependencies,
     * and set middleware for this controller's methods.
     *
     * @param CampaignRepository $campaignRepository
     */
    public function __construct(CampaignRepository $campaignRepository)
    {
        $this->campaignRepository = $campaignRepository;
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
        // @NOTE: Uncomment this line to demo globalization!
        // app()->setLocale('es-MX');

        $campaign = $this->campaignRepository->findBySlug($slug);

        if (! CampaignRepository::isActive($campaign)) {
            return view('campaigns.inactive.show', ['campaign' => $campaign]);
        }

        return view('campaigns.active.show', ['campaign' => $campaign]);
    }
}
