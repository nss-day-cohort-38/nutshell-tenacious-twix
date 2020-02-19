const htmlManager = {
  eventsHtmlCreator: events => {
    return `
        <div class="event-card">
            <p>${events.name}</p>
            <p>${events.location}</p>
            <p>${events.date}</p>
        </div>
        `;
  }
};

export default htmlManager;
