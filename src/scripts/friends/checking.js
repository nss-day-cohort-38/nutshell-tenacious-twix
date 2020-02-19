//Kurt Krafft =>this page checks to see if I have already added a friend

import apiManager from "./kkApiManager.js";
import domManager from "./kkDomManager.js";


const checkingManager = {
    checkExistingFriend:(friendId, id) => {
        
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
}

export default checkingManager;