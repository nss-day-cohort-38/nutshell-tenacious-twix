//Kurt Krafft => this is my program that handles dealing with even listeners and also grabbing the correct data
import domManager from "./kkDomManager.js";
import checkingManager from "./checking.js";
import apiManager from "./kkApiManager.js";
import htmlManager from "../events/eventsHtmlCreator.js";
import htmlFactoryManager from "./kkHtmlFactories.js";
// const friendButton = document.getElementById('friends-button');



const chatEventsManager = {
  addSendMessageListener:(id) => {
    const searchBar = document.getElementById('user-input')
    searchBar.addEventListener('keypress', () => {

      if(event.charCode===13){
        
        const newMessage = {
          "message":searchBar.value,
          "userId": parseInt(id)
        }
        apiManager.postMessage(newMessage).then(() => {
          domManager.addChatBoxInfo(id)
        } 
        )
        searchBar.value="";
      }
      
    })
  },
  editButtonListener:(id)=> {
    const chatField = document.getElementById('chat-field');
    chatField.addEventListener('click', () => {
      if(event.target.id.startsWith('editBtn-')) {
        // console.log(event);
        if(event.path[2].childNodes[1].childNodes[0].localName !=="input"){
        const chatId = event.target.id.split('-')[1]
        const textField = document.getElementById(`text-${chatId}`)
        const value = textField.innerHTML;
        textField.innerHTML = `<input id="edit-form-${chatId}" type="text" value="${value}"><button type="button" id="submit-${chatId}">Submit</button>`
        

      }}
      else if(event.target.id.startsWith("submit-")){
        const editId = event.target.id.split('-')[1];
        const input = document.getElementById(`edit-form-${editId}`)
        const userId = event.path[2].childNodes[3].childNodes[0].id.split('-')[2];
        const newObj = {
          userId: Number(userId),
          message: input.value,
        }
        apiManager.editMessage(editId, newObj).then(() => {
          domManager.addChatBoxInfo(id)
        } )
      } else if (event.target.id.startsWith('delete-')){
        const deleteId = event.target.id.split('-')[1];
        apiManager.deleteMessage(deleteId).then(() => {
          domManager.addChatBoxInfo(id)
        } );
        
      } else if (event.target.id.startsWith('message-username-')){
        if(Number(event.target.id.split('-')[2])!==id){
        const userId = event.target.id.split('-')[2];

        apiManager.getUser(userId).then( arr=> {
          arr.forEach(obj=> {
            domManager.addFriendbox(obj);
          })
        })}
      } else if (event.target.id.startsWith('add-')) {
        const friendUserId = event.target.id.split('-')[1];
        checkingManager.checkExistingFriend(friendUserId, id);
          
     
        
      } else if (event.target.id === 'nevermind') {
          domManager.addChatBoxInfo(id);
      }
    })
  },
  
  addNickNameListener: (id) => {
    const textField = document.getElementById(`newName-${id}`)
    textField.addEventListener('keypress', () => {

      if(event.charCode===13){
        // console.log(event)
        const friendId = (event.path[3].id.split('-')[1])
        const newObj = {
          friendUserId: Number(sessionStorage.getItem(`activeUsers`)),
          userId: Number(event.path[2].id.split('-')[1]),
          nickName: textField.value
        }
        apiManager.updateNickName(newObj, friendId).then(() => {
          domManager.getFriendCardData()
        } )
      }
    })
  },
  addFriendsContainerListener:() => {
    const friendsContainer= document.getElementById('friends-container')
    friendsContainer.addEventListener('click', () => {
      if(event.target.id.startsWith('delete-')){
        const friendId = event.target.id.split('-')[1];
        apiManager.deleteFriend(friendId).then(() => {
          domManager.getFriendCardData();
        })
      } else if(event.target.id.startsWith('reName-')){
        const nNameID = event.target.id.split('-')[1];
        const value = event.path[1].firstElementChild.innerHTML
        const spanEl = document.getElementById(`nickName-${nNameID}`)
        if(spanEl.innerHTML==="Would you like to add a Nickname?"){
          spanEl.innerHTML = `<input type="text" class="text-width" placeholder="${value}" id="newName-${nNameID}">`
        chatEventsManager.addNickNameListener(nNameID);
        }else {
        spanEl.innerHTML = `<input type="text" class="text-width" value="${value}" id="newName-${nNameID}">`
        chatEventsManager.addNickNameListener(nNameID);}
      }
    })
  },
  addFriendButtonListener:() => {
    const addFriendButton = document.getElementById('friend-card-container')
    addFriendButton.addEventListener('click', () => {
      if (event.target.id.startsWith('addNewFriend-')) {
        const friendUserId = event.target.id.split('-')[1];
        checkingManager.differentCheck(friendUserId);
          
     
        
      }
    })
  },
  searchFriendsListener:() => {
    const searchbar = document.getElementById('search-friends');
    searchbar.addEventListener('keypress', () => {
      if(event.charCode===13){
        const addFriendButton = document.getElementById('friend-card-container')
        addFriendButton.innerHTML = "";
        const username = searchbar.value;
        apiManager.searchFriendByName(username).then(arr=> {
          arr.forEach(obj=> {
            const addFriendsContainer = document.getElementById('friend-card-container')
            addFriendsContainer.innerHTML+= htmlFactoryManager.addNewFriendCard(obj);
          })
        })
        
      }
      
    })
  }
 
}

// const friendsEventManager = {
//     addFriendsNavBarListener: () => {
//         friendButton.addEventListener('click', () => {
//         const html= mainDomManager.createMainDomHtml();
//         renderManager.renderNewPageToDom(html);
//         domManager.getFriendCardData()
//         chatEventsManager.addFriendsContainerListener(sessionStorage.getItem(`activeUsers`));
//         domManager.addChatBoxInfo(sessionStorage.getItem(`activeUsers`))
//         chatEventsManager.addSendMessageListener(sessionStorage.getItem(`activeUsers`));
//         chatEventsManager.editButtonListener(sessionStorage.getItem(`activeUsers`));
//       })
//     }
// }

export default chatEventsManager;