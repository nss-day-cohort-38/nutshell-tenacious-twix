//Kurt Krafft =>this page adds all the event listeners and then sends the correct data to the dom or to verificaton
import verificationManager from "./verificationManager.js";
import domManager from "./domManager.js";   



const authEventManager = {
    submitButtonListener: () => {
      const submitButton =document.getElementById('submitForm');
      submitButton.addEventListener('click', () => {
        const email = document.getElementById('email-entry');
        const password = document.getElementById('password-entry');
        const user = {
            "email": email.value,
            "password": password.value
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
            const modalPasswordInput = document.getElementById('password-input')
            const confirmPassword = document.getElementById('confirm-password')
            if (modalPasswordInput.value !==  confirmPassword.value){
                alert('The passwords do not match')
            } else if (modalEmailInput.value===""){
                alert('Please enter your email')
            } else if (modalUsernameInput.value===""){
                alert('Please enter your username')
            } else if (modalPasswordInput.value===""){
                alert('Please enter your password')
            }
                else {
                const newProfile = {
                    "username": modalUsernameInput.value,
                    "email": modalEmailInput.value,
                    "password": modalPasswordInput.value
                }
    
              verificationManager.verifyNewUser(newProfile);
            }
            
        })
   
    }
}

export default authEventManager;