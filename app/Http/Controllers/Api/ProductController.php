<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request) {
        $posts = Post::query()->get()->toArray();
        return self::responseResult(true, $posts);
    }

    public function create(Request $request) {

    }

    public function update(Request $request) {

    }

    public function destroy(Request $request)
    {
        // TODO: Implement destroy() method.
    }
}
