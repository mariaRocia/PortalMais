<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class NoticeController extends Controller
{
    public function index()
    {
        $notices = Notice::orderByDesc('id')->paginate(10);
        return Inertia::render('Notices/NoticesIndex', ['notices' => $notices]);
    }

    public function show(Notice $notice) : Response {
        return Inertia::render('Notices/NoticeShow', ['notice' => $notice]);
    }

    public function create() : Response {
        return Inertia::render('Notices/NoticeCreate');
    }

    public function store(Request $request) {
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

        Notice::create([
            'title' => $request->title,
            'description' => $request->description,
            'author' => $request->user()->name,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->route('notices.index');
    }

    public function edit(Notice $notice) : Response {
        return Inertia::render('Notices/NoticeEdit', ['notice' => $notice]);
    }

    public function update(Request $request, Notice $notice) {
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

        $notice->update([
            'title' => $request->title,
            'description' => $request->description,
            'updated_at' => now(),
        ]);

        return redirect()->route('notices.index');
    }
}
