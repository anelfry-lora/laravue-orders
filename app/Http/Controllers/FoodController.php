<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Http\Requests\StoreFoodRequest;
use App\Http\Requests\UpdateFoodRequest;
use App\Http\Resources\FoodResource;
use GuzzleHttp\Psr7\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $foods = Food::where('status', 1)->paginate();
        
        return FoodResource::collection($foods);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFoodRequest $request)
    {
        $food = Food::create($request->validate());

        return new FoodResource($food);

    }

    /**
     * Display the specified resource.
     */
    public function show(Food $food)
    {
        return new FoodResource($food);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFoodRequest $request, Food $food)
    {
        $food->update($request->validate());

        return new FoodResource($food);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Food $food)
    {
        $food->delete();
        return response(content: '', status: 204);
    }
}
