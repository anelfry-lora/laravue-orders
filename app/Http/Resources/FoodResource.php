<?php

namespace App\Http\Resources;

use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\Resources\Json\JsonResource;

class FoodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'status' => $this->status,
            'image' => $this->image,
            'description' => $this->description,
            'created_at' => (new DateTime($this->created_at,))->format('h:i:s a. d/M/Y'),
            'updated_at' => (new DateTime($this->updated_at,))->format('h:i:s a. d/M/Y'),
        ];
    }
}
