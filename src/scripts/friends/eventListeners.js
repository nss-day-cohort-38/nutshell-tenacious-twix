import renderManager from "../renderManager.js";
import mainDomManager from"./kkMainDomManager.js";
import domManager from "./kkDomManager.js";
import objectManager from "./objectManager.js";
import apiManager from "./kkApiManager.js";
const friendButton = document.getElementById('friends-button');

const chatEventsManager = {
  addDeleteEventListener: () => {
    const container = document.getElementById('friends-container')
    container.addEventListener('click', () => {
      if(event.target.id.split('-')[0]==='delete'){
        console.log('delete')
      }
    })
  },
  addSendMessageListener:(id) => {
    const searchBar = document.getElementById('user-input')
    searchBar.addEventListener('keypress', () => {
      if(event.charCode===13){
        
        const newMessage = {
          "message":searchBar.value,
          "userId":id
        }
        apiManager.postMessage(newMessage).then(domManager.addChatBoxInfo
        )
      }
    })
  }
}

const friendsEventManager = {
    addFriendsNavBarListener: (id) => {
      friendButton.addEventListener('click', () => {
        const html= mainDomManager.createMainDomHtml();
        renderManager.renderNewPageToDom(html);
        domManager.getFriendCardData(id)
        chatEventsManager.addDeleteEventListener(id);
        domManager.addChatBoxInfo()
        chatEventsManager.addSendMessageListener(id);
      })
    }
}

export default friendsEventManager;