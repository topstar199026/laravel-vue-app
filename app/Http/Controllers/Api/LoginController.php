<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

use Socialite;

use App\Http\Controllers\Util\UserUtil;

class LoginController extends Controller
{
  public function loginByEmail(Request $request)
  {
    $data = Arr::except($request->all(), ['token']);
    if(Auth::attempt([
        'user_email' => $data['email'],
        'password' => $data['password'],
    ]))
    {
      $user = $request->user();
      $tokenResult = $user->createToken('Personal Access Token');
      $token = $tokenResult->plainTextToken;

      $user['role'] = 'admin';
      $res['token'] = $token;
      $res['user'] = $user;
      return response()->json([
        'status'=> true,
        'data' => $res,
        'msg' => 'Login succeed.',
      ]);
    }
    else
    {
      return response()->json([
        'status'=> false,
        'msg' => 'Login failed.',
      ]);
    }

  }

  public function loginBySocial($provider)
  {
    $fUser = Socialite::driver($provider)->stateless()->user();
    if($fUser->id)
    {
      $user = UserUtil::loginUserBySocial($provider, $fUser);
      if($user)
      {
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;

        $user['role'] = 'admin';
        $res['token'] = $token;
        $res['user'] = $user;

        return response()->json([
          'status'=> true,
          'data' => $res,
          'msg' => 'Login succeed.',
        ]);
      }
      else
        return response()->json([
          'status'=> false,
          'msg' => 'Login failed.',
        ]);
    }
    else
    {
      return response()->json([
        'status'=> false,
        'msg' => 'Login failed.',
      ]);
    }
  }
}
