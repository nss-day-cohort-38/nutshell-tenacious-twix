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
        searchBar.value="";
      }
      
    })
  },
  editButtonListener:()=> {
    const chatField = document.getElementById('chat-field');
    chatField.addEventListener('click', () => {
      if(event.target.id.startsWith('editBtn-')) {
        const chatId = event.target.id.split('-')[1]
        const textField = document.getElementById(`text-${chatId}`)
        const value = textField.innerHTML;
        textField.innerHTML = `<input id="edit-form-${chatId}" type="text" value="${value}"><button type="button" id="submit-${chatId}">Submit</button>`
        

      }
      else if(event.target.id.startsWith("submit-")){
        // console.log(event)
        const editId = event.target.id.split('-')[1];
        const input = document.getElementById(`edit-form-${editId}`)
        const userId = event.path[2].childNodes[3].childNodes[0].id.split('-')[2];
        const newObj = {
          userId: Number(userId),
          message: input.value,
        }
        apiManager.editMessage(editId, newObj).then(domManager.addChatBoxInfo)
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
        chatEventsManager.editButtonListener();
      })
    }
}

export default friendsEventManager;