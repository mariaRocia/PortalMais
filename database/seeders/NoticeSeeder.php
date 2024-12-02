<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Notice;

class NoticeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 25; $i++) {
            Notice::firstOrCreate(
                ['title' => 'Notice ' . $i],
                [
                    'title' => 'Notice ' . $i,
                    'description' => 'Description ' . $i,
                    'author' => 'Author ' . $i,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}
