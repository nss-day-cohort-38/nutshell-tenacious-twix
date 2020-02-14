const mainDomManager = {
    createMainDomHtml: () => {
      return `
      <div id="top-container">
      <h1>Here are you friends...</h1>
        <div id="friends-container">
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
      </div>`
    }
}

export default mainDomManager;
{/* <div id="received-messages"></div>
<div id="sent-messages"></div> */}