const htmlManager = {
  header: () => {
    return `
    <h2>Friends Events</h2>
    <div id="friend-events"></div>`
  },

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
