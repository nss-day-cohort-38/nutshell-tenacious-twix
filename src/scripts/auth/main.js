//Kurt Krafft =>this is my main page for the log in form

import authEventManager from "./eventListeners.js";
import inputMainDom from "./maindDom.js";
const SignIn = {
    runIt:() => {
        inputMainDom.addMainDOm();
        authEventManager.submitButtonListener()
        authEventManager.createAccountButtonListener();
    } 
}   

export default SignIn;