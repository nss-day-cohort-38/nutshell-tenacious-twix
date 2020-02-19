//Kurt Krafft => this creates my the page that I use mostly
const mainDomManager = {
    createMainDomHtml: () => {
      return `
      <div id="friendsBody">
      <div id="top-container">
    
      <h1 class="friendsIntro">Friends</h1>
      <br>
      <div class='fwiends'>
        <div id="friends-container">
        </div>
        </div>
      </div>
      
      <div id="bottom-container">
      <h1>Current Chat...</h1>
    
      <fieldset id="chat-box">
      <div id="chat-field">

      </div>
      <input type="text" id="user-input" placeholder="Say Hello!">
      </fieldset>
      </div>
      <div id="addFriends-container">
      <h1>Add Friends...</h1>
      <input id="search-friends" type="text" placeholder="Search for Friends here">
      <div id="friend-card-container">
      </div>
      </div>
      </div>`
     
    }
}

export default mainDomManager;
{/* <div id="received-messages"></div>
<div id="sent-messages"></div> */}