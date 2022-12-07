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

    public function store(string $parent, Request $request)
    {
        $this->validate($request, [
            'name_en' => 'required|string',
            'name_mm' => 'required|string'
        ]);

        if ($parentCategory = $this->category->getCategoryByEn($parent)) {
            if (
                $category = $this->category->createCategory(
                $parentCategory,
                $request->input('name_en'),
                $request->input('name_mm')
            )) {
                return response()->json([
                    'data' => $category
                ], 200);
            }
            return response()->json(
                [
                    'message' => __('category create failed')
                ],
                406
            );
        }

        return response()->json(
            [
                'message' => __("category not found")
            ],
            404
        );
    }

    public function show(string $nameEn)
    {
        if ($category = $this->category->getCategoryByEn($nameEn)) {
            return response()->json(
                [
                    'data' => $category
                ],
                200
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
