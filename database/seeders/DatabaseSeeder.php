<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Food::factory(100)->create();

        User::factory()->create([
            'name' => 'Anelfry Lora',
            'last_name' => 'Anelfry Lora',
            'email' => 'al@email.com',
            'password' => Hash::make('pass123'),
            'remember_token' => Str::random(10),
        ]);
    }
}
