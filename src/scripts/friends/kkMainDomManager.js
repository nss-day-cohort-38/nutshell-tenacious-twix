const mainDomManager = {
    createMainDomHtml: () => {
      return `
      <div id="friendsBody">
      <div id="top-container">
    
      <h1 class="friendsIntro">Here are you friends...</h1>
      <br>
      <div class='fwiends'>
        <div id="friends-container">
        </div>
        </div>
      </div>
      
      <div id="bottom-container">
      <h1>Current Chat...</h1>
      <div id="buttons-container">
      <button type="button" id="btn-friendId">Friend Name</button>
      </div>
      <fieldset id="chat-box">
      <div id="chat-field">

      </div>
      <input type="text" id="user-input" placeholder="Say Hello!">
      </fieldset>
      </div>
      </div>`
     
    }
}

export default mainDomManager;
{/* <div id="received-messages"></div>
<div id="sent-messages"></div> */}