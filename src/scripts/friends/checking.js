import apiManager from "./kkApiManager.js";


const checkingManager = {
    checkExistingFriend:(friendId) => {
        
        apiManager.checkOneFriend(friendId, sessionStorage.getItem(`activeUsers`)).then(arr=>{
            if(arr.length>=1){
                return true
                
            } else {
                return false;
            }
        })
      
    }
}

export default checkingManager;