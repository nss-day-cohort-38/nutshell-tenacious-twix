//Kurt Krafft =>this is my main page for the log in form

import authEventManager from "./eventListeners.js";
const SignIn = {
    runIt:() => {
        authEventManager.submitButtonListener()
        authEventManager.createAccountButtonListener();
    } 
}   

export default SignIn;