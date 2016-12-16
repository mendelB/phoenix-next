<?php

namespace App\Http\Middleware;

use Closure;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $override = $request->query('locale');
        if ($override) {
            session(['locale' => $override]);
        }

        $currentLocale = session('locale', app()->getLocale());
        app()->setLocale($currentLocale);

        return $next($request);
    }
}
