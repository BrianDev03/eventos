// En LogoutButton.js
import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "231130849717-kig4nfnhmekdhsd2lucevp106haqull3.apps.googleusercontent.com";

function LogoutButton() {
    const onSuccess = () => {
        console.log("Logout successfull!");
        // Aquí puedes realizar cualquier otra acción que necesites al cerrar sesión
    }

    return (
        <div id="signoutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default LogoutButton;
