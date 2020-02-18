import htmlManager from "./htmlmanager.js";
import authEventManager from "./eventListeners.js";


const domManager = {
    createSignUpModal: () => {
        const html = htmlManager.createModalSignUpHtml()
        document.getElementById('Kmodal').innerHTML = html;
        authEventManager.exitModalButton();
        authEventManager.submitProfileFromModal();
      
        
    },
    errorBoxFiller:() => {
      const box = document.getElementById('error-box');
      box.innerHTML=""
    box.innerHTML="Sorry, the username or email entered was incorrect"
        }
}
export default domManager