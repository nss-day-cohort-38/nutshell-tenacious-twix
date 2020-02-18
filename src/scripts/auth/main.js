import authEventManager from "./eventListeners.js";
const SignIn = {
    runIt:() => {
        authEventManager.submitButtonListener()
        authEventManager.createAccountButtonListener();
    } 
}   

export default SignIn;