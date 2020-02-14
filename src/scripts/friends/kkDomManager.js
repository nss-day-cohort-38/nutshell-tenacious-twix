import apiManager from "./kkApiManager.js";
import renderManager from "../renderManager.js";
import htmlFactoryManager from "./kkHtmlFactories.js";

const domManager = {
    getFriendCardData:(id) => {
       
      apiManager.getFriendList(id, 'friends').then(arr=> {
        
          const friends= []
          arr.forEach(obj=> {
              friends.push(obj);
          })
          
          friends.forEach(friendObj=> {
              console.log(friendObj)
              apiManager.getUser(friendObj.friendId).then(arr=> {
                  arr.forEach(obj=> {
                    //   console.log(obj)
                    const html = htmlFactoryManager.generateFriendCardHtml(obj, friendObj.id);
                    renderManager.renderSingleHtmlToContainer(html, 'friends-container');
                  })
              })    
          })   
      })
      
    },
    renderNameToChatButton: (obj) => {
      const nameDisplay = document.getElementById('buttons-container')
      nameDisplay.innerHTML += `<button id="btn-${obj.id}" type"button">${obj.name}</button>`
    },
    addChatBoxInfo:() => {
        apiManager.getMessages().then(arr=>{
            const chatField = document.getElementById('chat-field');
            chatField.innerHTML ="";
            arr.forEach(obj=> {
                console.log(obj);
                const html = htmlFactoryManager.generateMessageHtml(obj);
                renderManager.renderSingleHtmlToContainer(html, 'chat-field');
            })
        })
    },
    renderChatBoxData: (friendId, activeUserId)=> {

        apiManager.getUserAndFriendMessages(friendId, activeUserId).then(arr=> {
            arr.forEach(obj=> {
                if(obj.wasSent===true){
                    const html = htmlFactoryManager.generateMessageHtml(obj);
                    renderManager.renderSingleHtmlToContainer(html, 'sent-messages');
                } else {
                    const html = htmlFactoryManager.generateMessageHtml(obj);
                    renderManager.renderSingleHtmlToContainer(html, 'received-messages');
                }
               
            })
        })
    },
    createCardsFromData:(arr) => {
        debugger
        arr.forEach(obj=> {

            const html = htmlFactoryManager.generateFriendCardHtml(obj);
            renderManager.renderSingleHtmlToContainer(html, 'friends-container');
        })
        
      
    }
}
export default domManager;