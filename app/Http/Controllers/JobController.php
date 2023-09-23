<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;


class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():Response
    {
        return Inertia::render('Jobs/Index',[
            // 'jobs'=>Job::with('user:id,name')->latest()->get(),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request):RedirectResponse
    {
        $validated = $request->validate([
            'company_name'=>'required',
            'phone'=>'required',
            'email'=>'required',
            'address'=>'required',
            'position'=>'required',
            'gender'=>'required',
            'number'=>'required',
            'degree'=>'required',
            'experience'=>'required',
            'salary'=>'required',
            'job_type'=>'required',
            'details'=>'required',
        ]);

        $request->user()->jobs()->create($validated);

        return redirect(route('dashboard'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Job $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Job $job): RedirectResponse
    {
        dd($request->user()->id, $job);
       $this->authorize('update', $job);


        $validated = $request->validate([
            'company_name'=>'required',
            'phone'=>'required',
            'email'=>'required',
            'address'=>'required',
            'position'=>'required',
            'gender'=>'required',
            'number'=>'required',
            'degree'=>'required',
            'experience'=>'required',
            'salary'=>'required',
            'job_type'=>'required',
            'details'=>'required',
        ]);

        $job->update($validated);

        return redirect(route('post.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Job $job)
    {
        // $this->authorize('delete', $job);

        // $job->delete();

        // return redirect(route('post.index'));
    }
}