<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index() {
        $data = [
            'title' => 'App Laravel 8'
        ];

        return view('pages.home.index', $data);
    }
}
