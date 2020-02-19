const htmlManager = {
    eventsHtmlCreator: events => {
      return `
        <div class="event-card">
          <div class="event-details-container">
            <p>${events.name}</p>
            <p>${events.location}</p>
            <p>${events.date}</p>
          </div>
          <div class="event-buttons-container">
            <i class="trash alternate icon eventIcon" id="delete-${events.id}"></i>
            <i class="edit icon eventIcon" id="edit-${events.id}"></i>
          </div>
        </div>
        `;
    }
  };
  
  export default htmlManager;
  