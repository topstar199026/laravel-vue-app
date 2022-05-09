<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use Socialite;

use App\Http\Controllers\Util\UserUtil;

class RegisterController extends Controller
{
  public function index()
  {
    return view('application');
  }

  public function registerByEmail(Request $request)
  {
    $data = Arr::except($request->all(), ['token']);
    $res = UserUtil::registerUserByEmail($data);
    if($res)
    {
        return response()->json([
            'status'=> true,
            'data' => null,
            'msg' => 'Your account has been successfully created.',
        ]);
    }
    else
    {
        return response()->json([
            'status'=> false,
            'data' => null,
            'msg' => 'That email already exists.',
        ]);
    }
  }

  public function registerBySocial($provider)
  {
    $user = Socialite::driver($provider)->stateless()->user();
    if($user->id)
    {
      $res = UserUtil::registerUserBySocial($provider, $user);
      if($res)
        return response()->json([
          'status'=> true,
          'data' => null,
          'msg' => 'Your account has been successfully created.',
        ]);
      else
        return response()->json([
          'status'=> false,
          'data' => null,
          'msg' => 'That user already exists.',
        ]);
    }
    else
    {
      return response()->json([
        'status'=> false,
        'data' => null,
        'msg' => 'Action failed.',
      ]);
    }
  }
}
