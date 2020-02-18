import apiManager from "./apiManager.js";
import verificationManager from "./verificationManager.js";
import domManager from "./domManager.js";   



const authEventManager = {
    submitButtonListener: () => {
      const submitButton =document.getElementById('submitForm');
      submitButton.addEventListener('click', () => {
        const email = document.getElementById('email-entry');
        const username = document.getElementById('username-entry');
        const user = {
            "email": email.value,
            "username": username.value
        }
        verificationManager.verifyEmail(user);
        // console.log(user);
      })
    },
    createAccountButtonListener:() => {
      const createButton = document.getElementById('createNewProfile')
      createButton.addEventListener('click', () => {
          const div = document.getElementById('M-cont')
          div.innerHTML+= '<div id="Kmodal"></div>'
        domManager.createSignUpModal();
      })
    },
    exitModalButton:() => {
      const icon = document.getElementById('leave-modal')
      icon.addEventListener('click', () => {
        const modal = document.getElementById('M-cont')
        modal.innerHTML = "";
      })
    },
    submitProfileFromModal:() => {
        const join = document.getElementById('join-button')
        join.addEventListener('click', () => {
            const modalEmailInput = document.getElementById('email-input')
            const modalUsernameInput = document.getElementById('username-input')
            const newProfile = {
                "username": modalUsernameInput.value,
                "email": modalEmailInput.value
            }

          verificationManager.verifyNewUser(newProfile);
        })
   
    }
}

export default authEventManager;