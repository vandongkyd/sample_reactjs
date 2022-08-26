<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param $status
     * @param $data
     * @param false $messages
     * @param int $code
     * @return JsonResponse
     */
    public static function responseResult($status, $data, $messages = false, $code = 200) {
        $result = [
            "status" => $status,
            "data" => $data
        ];
        if ($messages) {
            $result["message"] = $messages;
        }
        return response()->json($result, $code);
    }

}
