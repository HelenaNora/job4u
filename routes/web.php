<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FindingJobController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/',function(){
    return Inertia::render('Home',[

    ]);
})->name('home');
// Route::get('/findingJob', function () {
//     return Inertia::render('FindingJob');
// })->middleware(['auth', 'verified'])->name('findingJob');

Route::resource('finding-Job',FindingJobController::class)
->only(['index'])
->middleware(['auth','verified']);

// Route::get('/findingJob', 'FindingJobController@index')->name('findingJob');

// Route::get('/findingJob', [FindingJobController::class, 'index'])->name('findingJob.index');

// Route::get('/findingJob', 'FindingJobController@index')->name('findingJob');
// Route::namespace('App\Http\Controllers')->group(function () {
//     Route::get('/findingJob', 'FindingJobController@index');
// });




Route::get('/help_center',function(){
    return Inertia::render('HelpCenter',[
    ]);
})->name('help_center');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('post',JobController::class)
->only(['index','store','update'])
->middleware(['auth','verified']);


// Route::get('/edit', function () {
//     return Inertia::render('JobEdit');
// })->name('edit');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';