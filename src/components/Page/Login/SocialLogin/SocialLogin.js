import React from 'react';
import googleLogo from '../../../../images/social/google-logo.png'
import appleLogo from '../../../../images/social/apple-logo.png'
import facebookLogo from '../../../../images/social/facebook-logo.png'
const SocialLogin = () => {
    return (
        <>
            <div className='d-flex align-items-center px-2'>
                <div style={{ height: "1px" }} className='w-50 bg-primary '></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-primary '></div>

            </div>
            <div className='text-center p-2'>
                <button className='btn btn-light border mb-2 w-100'> <img style={{ width: "50px" }} src={googleLogo} alt="" />    continue with google</button>
                <button className='btn btn-dark mb-2 w-100'>
                    <img style={{ width: "50px" }} src={appleLogo} alt="" />
                    continue with apple</button>
                <button className='btn btn-light border mb-2 w-100'>
                    <img style={{ width: "40px" }} src={facebookLogo} alt="" />
                    continue with facebook</button>
            </div>
        </>
    );
};

export default SocialLogin;