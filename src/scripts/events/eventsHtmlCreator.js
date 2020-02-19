const htmlManager = {
  addNewEvent: `
    <button id="addEventButton">Add new event</button>
    <article id="eventsContainer"><article>
    <p id="updateEvent"></p>
    `,
  eventForm: `
      <br>
      <div id="eventform">
      <form>
      <input type="hidden" id="eventId" value="">
      
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
      <button id="updateEvent">Update events</button>

      <article id="eventsContainer"><article>

      </div>
      `,
  eventsHtmlCreator: events => {
    return `
      <div class="event">
      <p>${events.name}</p>
      <span>
      <i class="trash alternate icon eventIcon" id="delete-${events.id}"></i>
      <i class="edit icon eventIcon" id="edit-${events.id}"></i>
      </span>
      <p>${events.location}</p>
      <p>${events.date}</p>
      </div>
      `;
  }
};

export default htmlManager;
