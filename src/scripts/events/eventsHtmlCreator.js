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
        <label for="journalDate" class="label">Date:</label>
        <input type="date" name="journalDate" id="journalDate">
      </fieldset>
      </form>
      </div>
      `,
    eventsHtmlCreator: events => {
      return `
      <br><hr>
      <div>${events.name}</div>
      <span>
      <button class="deleteButton" id=delete-${events.id}>Delete</button>
      <button class="editButton" id=edit-${events.id}>Edit</button>
      <div>${events.location}</div>
      <div>${events.date}</div>
      `;
    }
  };
  
  export default htmlManager;
  