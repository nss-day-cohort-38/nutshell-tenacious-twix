const inputMainDom = {
    addMainDOm:() => {
      const container = document.getElementById('container')
      container.innerHTML = `
      <div id="form-container">
      <div id="signIn-form">
        <form id="login">
          <h1 id="formTitle">Register or Sign-In</h1>
          <fieldset id="emails">
            <label for="email">Email: </label>
            <input
              name="email"
              type="text"
              id="email-entry"
              placeholder="Email here"
            />
          </fieldset>
          <fieldset id="usernames">
            <label for="password">Password: </label>
            <input
              type="text"
              name="password"
              id="password-entry"
              placeholder="Password Here"
            />
            <div id="error-box"></div>
          </fieldset>
        </form>
        <div class="formButtons">
          <button type="button" class="form-button" id="submitForm">
            Submit!
          </button>
          <h1>Or</h1>
          <button type="button" class="form-button" id="createNewProfile">
            Create An Account
          </button>
        </div>
        <div id="M-cont"></div>
      </div>
    </div>`
    }
}
export default inputMainDom;