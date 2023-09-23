<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class FindingJobController extends Controller
{
    public function index():Response
    {
        return Inertia::render('FindingJob',[
            'jobs'=>Job::with('user:id,name')->latest()->get(),
        ]);

    }
}