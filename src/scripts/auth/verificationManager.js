//Kurt Krafft =>this page clears the form hard coded in and in the modal it also verifies whether a username or email is being used

import apiManager from  "./apiManager.js";
import domManager from "./domManager.js";
const clearModalManager = {
    clearModal:() => {
        
      const emailInput = document.getElementById('email-input');
      const usernameInput = document.getElementById('username-input');
      emailInput.value = "";
      usernameInput.value ="";
    }
}


const formManager = {
    clearForm:() => {
      const email = document.getElementById('email-entry');
      const username =document.getElementById('username-entry');
      email.value = "";
      username.value = "";
    }
}

const verificationManager = {
    verifyEmail: (obj) => {
      apiManager.getUserProfileViaEmail(obj.email).then(arr=> {
        if (arr.length===0){
            domManager.errorBoxFiller();
            formManager.clearForm()
        }
       else if(arr[0].username===obj.username&arr[0].email===obj.email){
              alert('yes!')
              formManager.clearForm()
          }else if (arr[0].username===obj.username || arr[0].email===obj.email) {
              domManager.errorBoxFiller();
              formManager.clearForm()
          }  
      })
    },
    verifyNewUser:(obj) => {
        apiManager.getUserProfileViaEmail(obj.email).then(arr=> {
            if(arr.length<1){
                apiManager.addNewProfile(obj)
                clearModalManager.clearModal();
            } else {
                alert("We're Sorry, it looks like your username or email has already been taken, please try again.")
                clearModalManager.clearModal();
            }
        })
    }
}
export default verificationManager;