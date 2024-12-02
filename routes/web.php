<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NoticeController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
})->middleware(['auth', 'verified']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/notices', [NoticeController::class, 'edit'])->name('notices.index');
    Route::get('/show-notice/{{notice}}', [NoticeController::class, 'show'])->name('notices.show');
    Route::get('/create-notice', [NoticeController::class, 'create'])->name('notices.create');
    route::post('/store-notice', [NoticeController::class, 'store'])->name('notices.store');
    Route::get('/edit-notice/{{notice}}', [NoticeController::class, 'edit'])->name('notices.edit');
    Route::patch('/update-notice/{{notice}}', [NoticeController::class, 'update'])->name('notices.update');
});

require __DIR__.'/auth.php';

