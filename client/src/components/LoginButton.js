// En LoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "231130849717-kig4nfnhmekdhsd2lucevp106haqull3.apps.googleusercontent.com";

function LoginButton() {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED RES: ", res);
    }

    return (
        <div id="signinButoon">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}

export default LoginButton;
