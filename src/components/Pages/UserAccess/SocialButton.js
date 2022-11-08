import React from 'react';

const SocialButton = () => {
    return (
        <div className="form-control ">
            <button className="btn my-2 btn-primary btn-outline rounded-sm text-white">
                <img className='w-[25px] mr-2' src="https://img.icons8.com/color/48/null/google-logo.png" alt='' />
                Continue with google</button>
            <button className="btn my-2 btn-primary btn-outline rounded-sm text-white">
                <img className='w-[25px] mr-2' src="https://img.icons8.com/color/48/null/facebook-new.png" alt='' />

                Login with Facebook</button>
        </div>
    );
};

export default SocialButton;