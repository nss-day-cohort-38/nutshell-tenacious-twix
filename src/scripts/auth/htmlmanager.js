const htmlManager = {
    createModalSignUpHtml:(obj) => {
      return `<div class="Kmodal-card">
      <div class="Kmodal-card-text-container">
          <div id="SignUp-form">
          <div class="x-icon"><i id="leave-modal"class="times icon"></i></div>
          <h1>Welcome to TwixBook!</h1>
          <h4>Please fill out this form to continue...</h4>
          <fieldset>
            <label for="email-sign">Email: </label>
               <input id="email-input" name="email-sign" "type="text" placeholder="..."></fieldset>
               <fieldset><label for="username-sign">Username: </label>
              <input id="username-input" name="username-sign" type="text" placeholder="..."></fieldset>
              <button type="button" id="join-button">Join!</button>
          </div>

      </div>
  </div>`
    }
}
export default htmlManager;