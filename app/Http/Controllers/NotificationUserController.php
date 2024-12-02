<?php

namespace App\Http\Controllers;

use App\Models\NotificationUser;
use Illuminate\Http\Request;

class NotificationUserController extends Controller
{
    public function index()
    {
        $notificationUsers = NotificationUser::all();
        return response()->json($notificationUsers);
    }

    public function show($id)
    {
        $notificationUser = NotificationUser::findOrFail($id);
        return response()->json($notificationUser);
    }

    public function store(Request $request)
    {
        $notificationUser = NotificationUser::create($request->all());
        return response()->json($notificationUser, 201);
    }

    public function update(Request $request, $id)
    {
        $notificationUser = NotificationUser::findOrFail($id);
        $notificationUser->update($request->all());
        return response()->json($notificationUser, 200);
    }

    public function destroy($id)
    {
        NotificationUser::destroy($id);
        return response()->json(null, 204);
    }
}
