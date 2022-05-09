<?php
namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UserUtil extends Controller
{
    public static function userExistByEmail($data)
    {
        $user = User::where('user_email', $data['email'])->first();
        return $user;
    }

    public static function userExistBySocial($fId)
    {
        $user = User::where('fb_userid', $fId)->first();
        return $user;
    }

    public static function loginUserBySocial($provider, $data)
    {
        return self::userExistBySocial($data['id']);
    }

    public static function registerUserByEmail($data)
    {
        $existed = self::userExistByEmail($data);
        if($existed)
        {
            return false;
        }
        else
        {
            self::createByEmail($data);
            return true;
        }
    }

    public static function registerUserBySocial($provider, $data)
    {
        $existed = self::userExistBySocial($data['id']);
        if($existed)
        {
            return false;
        }
        else
        {
            self::createBySocial($data);
            return true;
        }
    }
    
    private static function createByEmail($data)
    {
        $user = new User();
        $user->user_username = $data['username'];
        $user->user_email = $data['email'];
        $user->password =  Hash::make($data['password']);
        /** Default value**/
        $user->fb_userid = 'email';
        $user->fb_userdata = 'email';
        $user->email_catch = 1;
        $user->email_news = 1;
        $user->email_offer = 1;
        $user->welcome_steps = 0;
        /** Default value**/
        $user->save();
        return $user;
    }

    private static function createBySocial($data)
    {
        $user = new User();
        // $user->user_username = $data['username'];
        $user->user_email = $data['email'];
        // $user->password =  Hash::make($data['password']);
        /** Default value**/
        $user->fb_userid = $data['id'];
        $user->fb_userdata = json_encode($data);
        $user->email_catch = 1;
        $user->email_news = 1;
        $user->email_offer = 1;
        $user->welcome_steps = 0;
        /** Default value**/
        $user->save();
        return $user;        
    }
}
