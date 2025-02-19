<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/menu', function () {
    return Inertia::render('Menu/Menu');
})->name('menu');
Route::get('/about', function () {
    return Inertia::render('AboutUs/AboutUs');
})->name('about');
Route::get('/treservation', function () {
    return Inertia::render('TableReservation/TableReservation');
})->name('treservation');
Route::get('/contact', function () {
    return Inertia::render('ContactUs/ContactUs');
})->name('contact');
Route::get('/special', function () {
    return Inertia::render('Special/Special');
})->name('special');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
