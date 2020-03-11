<?php
return [
    'path' => 'rediscope',

    'ajax_path' => env('PACKAGE_AJAX_PATH', 'admin_new/').'rediscope',

    'enabled' => env('REDISCOPE_ENABLED', true),

    'middleware' => [
        'web',
        'auth',
        'permission:Redis manager',
    ],
];