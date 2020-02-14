import renderManager from "../renderManager.js";
const friendButton = document.getElementById('friends-button');


const friendsEventManager = {
    addFriendsNavBarListener: () => {
      friendButton.addEventListener('click', () => {
        const html= `<h1>FRIENDS!!!</h1>`
        renderManager.renderNewPageToDom(html);
      })
    }
}
export default friendsEventManager;