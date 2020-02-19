//Kurt Krafft =>this page checks to see if I have already added a friend

import apiManager from "./kkApiManager.js";
import domManager from "./kkDomManager.js";


const checkingManager = {
    checkExistingFriend:(friendId, id) => {
      if (friendId===id){
        alert('you cant add yourself as a friend')
      } else {
        
       apiManager.checkOneFriend(friendId, sessionStorage.getItem(`activeUsers`)).then(arr=>{
            if(arr.length>=1){
               alert("This user is already your friend! You can't fake friends!");
                
            } else {
         
                const newObj = {
                    "userId": Number(friendId),
                    friendUserId: Number(id)
                  }
                  apiManager.addFriend(newObj).then(() => {
                  
                    domManager.getFriendCardData(id);
                  }).then(() => {
                    domManager.addChatBoxInfo(id);
                  })
            }
        })
        
      }
    },
    differentCheck:(friendId) => {
      if(friendId === sessionStorage.getItem(`activeUsers`)){
        alert("You can't add yourself as a friend")
      } else {
        apiManager.checkOneFriend(friendId, sessionStorage.getItem(`activeUsers`)).then(arr=> {
          if(arr.length>=1){
            alert("This user is already your friend! You can't fake friends!");
             
         } else {
         
          const newObj = {
              "userId": Number(friendId),
              friendUserId: Number(sessionStorage.getItem(`activeUsers`))
            }
            apiManager.addFriend(newObj).then(() => {
            
              domManager.getFriendCardData(sessionStorage.getItem(`activeUsers`));
              const addFriendButton = document.getElementById('friend-card-container')
              addFriendButton.innerHTML = "";
              const input = document.getElementById('search-friends')
              input.value = "";
             
            })
      }
        })
      }
    }
}

export default checkingManager;