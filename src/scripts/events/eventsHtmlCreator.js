const htmlManager = {
    eventForm: `
      <br>
      <div id="eventform">
      <form>
      <input type="hidden" id="entryId" value="">
      
      <fieldset id="nameBox">
          <label id="nameLabel" class="label">Event:</label>
          <br><input id="nameInput" type="text">
      </fieldset>
      
      <fieldset id="locationBox">
          <label id="locationLabel" class="label">Location:</label>
          <br><textarea id="locationInput"></textarea>
      </fieldset>
      
      <fieldset id="dateBox">
        <label for="dateInput" class="label">Date:</label>
        <input type="date" name="dateInput" id="dateInput">
      </fieldset>
      </form>
      <button id="update">Update events</button>
      </div>
      `,
    eventsHtmlCreator: events => {
      return `
      <br><hr>
      <div>${events.name}</div>
      <span>
      <button class="deleteButton" id=delete-${events.id}>Delete</button>
      <button class="editButton" id=edit-${events.id}>Edit</button>
      </span>
      <div>${events.location}</div>
      <div>${events.date}</div>
      `;
    }
  };
  
  export default htmlManager;
  