<?php

namespace NeverForgetTheBasics\Rediscope\Http\Controllers;

use Illuminate\Routing\Controller;
use NeverForgetTheBasics\Rediscope\Rediscope;

class HomeController extends Controller
{
    /**
     * Display the Telescope view.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('rediscope::layout', [
            'cssFile' => Rediscope::$useDarkTheme ? 'app-dark.css' : 'app.css',
            'rediscopeScriptVariables' => Rediscope::scriptVariables(),
        ]);
    }
}
