<?php

namespace Database\Factories;

use FakerRestaurant\Provider\en;
use FakerRestaurant\Provider\en_US\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Food>
 */
class FoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create();
        $faker->addProvider(new Restaurant($faker));

        $fakerName = $faker->meatName();
        return [
            'name' => $fakerName,
            'image' => $faker->imageUrl(640,480, ''.$fakerName),
            'description' => $faker->text(50),
            'status' => 1
        ];
    }
}
