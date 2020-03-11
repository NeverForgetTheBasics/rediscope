<?php

namespace NeverForgetTheBasics\Rediscope\Http\Middleware;

use NeverForgetTheBasics\Rediscope\Rediscope;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     *
     * @return \Illuminate\Http\Response|void
     */
    public function handle($request, $next)
    {
        return Rediscope::check($request) ? $next($request) : abort(403);
    }
}
