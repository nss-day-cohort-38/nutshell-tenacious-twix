//Kurt Krafft => this is my initialization function that runs all my event listeners etc. 

import chatEventsManager from "./eventListeners.js";
import renderManager from "../renderManager.js";
import mainDomManager from"./kkMainDomManager.js";
import domManager from "./kkDomManager.js";


const kkMainManager = {
    kkRunIt:() => {

      const html= mainDomManager.createMainDomHtml();
      renderManager.renderNewPageToDom(html);
      domManager.getFriendCardData()
      chatEventsManager.addFriendsContainerListener(sessionStorage.getItem(`activeUsers`));
      domManager.addChatBoxInfo(sessionStorage.getItem(`activeUsers`))
      chatEventsManager.addSendMessageListener(sessionStorage.getItem(`activeUsers`));
      chatEventsManager.editButtonListener(sessionStorage.getItem(`activeUsers`));
      chatEventsManager.searchFriendsListener();
      chatEventsManager.addFriendButtonListener();
  
    
           

    }
}
export default kkMainManager