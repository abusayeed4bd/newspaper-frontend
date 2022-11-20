import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import useToken from './../../Hooks/useToken';

const SocialButton = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user)

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }



    return (
        <div className="form-control ">

            {
                loading ?
                    <button className="btn my-2 btn-primary btn-outline rounded-sm text-white">
                        Loading...</button> :

                    <button onClick={handleGoogleLogin} className="btn my-2 btn-primary btn-outline rounded-sm text-white">
                        <img className='w-[25px] mr-2' src="https://img.icons8.com/color/48/null/google-logo.png" alt='' />
                        Continue with google</button>
            }

            {/* <button className="btn my-2 btn-primary btn-outline rounded-sm text-white">
                <img className='w-[25px] mr-2' src="https://img.icons8.com/color/48/null/facebook-new.png" alt='' />

                Login with Facebook</button> */}
        </div>
    );
};

export default SocialButton;