<?php

namespace App\Http\Controllers;

use App\Constants\CategoryConstant;
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
        if ($categories = $this->category->getParentCategory()) {
            return response()->json(
                [
                    'data' => $categories
                ],
                200
            );
        }

        return response()->json(
            [
                'message' => __('category not found')
            ],
            404
        );
    }

    public function getChildCategory(int $parentId)
    {
        if ($parent = $this->category->getCategoryById($parentId)) {
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

    public function store(int $parentId, Request $request)
    {
        $this->validate($request, [
            'name_en' => 'required|string',
            'name_mm' => 'required|string'
        ]);

        $parentCategory = $this->category->getCategoryById($parentId);
        if (!$parentCategory) {
            return response()->json(
                [
                    'message' => __("category not found")
                ],
                404
            );
        }

        if ($this->category->getCategoryByEn($request->input('name_en'))) {
            return response()->json(
                [
                    'message' => __('category already exists')
                ],
                406
            );
        }

        if (
            $category = $this->category->createCategory(
                $parentCategory,
                $request->input('name_en'),
                $request->input('name_mm')
            )
        ) {
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
