<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CacheController extends Controller
{
    /**
     * Clear the cached data for specified cacheId.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string $cacheId
     * @return \Illuminate\Http\RedirectResponse
     */
    public function __invoke(Request $request, $cacheId)
    {
        $redirectUrl = $request->query('redirect');

        app('cache')->forget($cacheId);

        return $redirectUrl ? redirect($redirectUrl) : back();
    }
}
