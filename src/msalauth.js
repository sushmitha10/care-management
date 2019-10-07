import * as Msal from 'msal';

const msalConfig = {
    auth: {
        authority: 'https://login.microsoftonline.com/tfp/',
        clientId: '97e7a838-35f9-4396-b74f-dc6295407f06',
        validateAuthority: true,
        postLogoutRedirectUri: "http://localhost:3000",
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "localstorage",
        storeAuthStateInCookie: true
    }
}

class MsalAuth {
     msalInstance = new Msal.UserAgentApplication(msalConfig);

     async acquireToken(request, redirect) {
        return this.msalInstance.acquireTokenSilent(request).catch(error => {
            console.log('error getting token');
        });
     }

     onSignOut() {
         caches.delete()
        this.msalInstance.logout();
     }

    async onSignIn(redirect) {
        const loginResponse = await this.msalInstance.loginPopup();
    }
}
export default MsalAuth;
