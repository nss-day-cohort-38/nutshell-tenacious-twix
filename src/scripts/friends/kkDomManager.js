import apiManager from "./kkApiManager.js";
import renderManager from "../renderManager.js";
import htmlFactoryManager from "./kkHtmlFactories.js";

const domManager = {
  getFriendCardData: id => {
    const friendsList = document.getElementById("friends-container");
    friendsList.innerHTML = "";
    apiManager.getFriendList(id, "friends").then(arr => {
      arr.forEach(friendObj => {
        const html = htmlFactoryManager.generateFriendCardHtml(
          friendObj
        );
        renderManager.renderSingleHtmlToContainer(html, "friends-container");
      });
    });
  },
  renderNameToChatButton: obj => {
    const nameDisplay = document.getElementById("buttons-container");
    nameDisplay.innerHTML += `<button id="btn-${obj.id}" type"button">${obj.name}</button>`;
  },
  addChatBoxInfo: () => {
    apiManager.getMessages().then(arr => {
      const chatField = document.getElementById("chat-field");
      chatField.innerHTML = "";
      arr.forEach(obj => {
        const html = htmlFactoryManager.generateMessageHtml(obj);
        renderManager.renderSingleHtmlToContainer(html, "chat-field");
      });
    //   console.log(sessionStorage.getItem(`activeUsers`))
      const filteredArr = [];
      arr.forEach(obj=> {
          if(obj.userId === parseInt(sessionStorage.getItem(`activeUsers`))){
              filteredArr.push(obj);
          }
      }) 
      filteredArr.forEach(obj => {
        const editButtonContainer = document.getElementById(
          `edit-Buttons-${obj.id}`
        );
        editButtonContainer.innerHTML = ` <i  id="editBtn-${obj.id}"class="edit icon"></i>
                <i  id="delete-${obj.id}"class="trash alternate outline icon"></i> `;
      });
    });
  },
  renderChatBoxData: (friendId, activeUserId) => {
    apiManager.getUserAndFriendMessages(friendId, activeUserId).then(arr => {
      arr.forEach(obj => {
        if (obj.wasSent === true) {
          const html = htmlFactoryManager.generateMessageHtml(obj);
          renderManager.renderSingleHtmlToContainer(html, "sent-messages");
        } else {
          const html = htmlFactoryManager.generateMessageHtml(obj);
          renderManager.renderSingleHtmlToContainer(html, "received-messages");
        }
      });
    });
  },
  addFriendbox: obj => {
    const chatfield = document.getElementById("chat-field");
    chatfield.innerHTML = htmlFactoryManager.generateAddFriendCard(obj);
  },
  createCardsFromData: arr => {
    debugger;
    arr.forEach(obj => {
      const html = htmlFactoryManager.generateFriendCardHtml(obj);
      renderManager.renderSingleHtmlToContainer(html, "friends-container");
    });
  }
};
export default domManager;
