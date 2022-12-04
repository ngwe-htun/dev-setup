<?php

namespace App\Http\Controllers;

use App\Constants\Category;
use Illuminate\Http\Request;
use App\Item\CategoryService;

class CategoryController extends Controller
{
    public function __construct(
        protected CategoryService $category
    ) {
    }

    public function getParentCategory()
    {
        return response()->json(
            [
                'data' => Category::getValues()
            ],
            200
        );
    }

    public function getChildCategory(string $category)
    {
        if ($parent = $this->category->getCategoryByEn($category)) {
            if ($categories = $this->category->getChildCategories($parent)) {
                return response()->json(
                    [
                        'data' => $categories
                    ],
                    200
                );
            }
            return response()->json(
                [
                    'message' => __("child category not found")
                ],
                404
            );
        }

        return response()->json(
            [
                'message' => __("category not found")
            ],
            404
        );
    }
}
