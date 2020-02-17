const eventAPI = {
  getEvents(activeUserId) {
    return fetch(
      `http://localhost:8088/events?userId=${activeUserId}`
    ).then(resp => resp.json());
  },
  updateEvent(event) {
    return fetch(`http://localhost:8088/events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  },
  saveEvent(event) {
    return fetch(`http://localhost:8088/events/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  },
  refillEvent(eventId) {
    const hiddenEntryId = document.querySelector("#entryId");
    const nameInput = document.querySelector("#nameInput");
    const locationInput = document.querySelector("#locationInput");
    const dateInput = document.querySelector("#dateInput");
    fetch(`http://localhost:8088/events/${eventId}`)
      .then(response => response.json())
      .then(event => {
        hiddenEntryId.value = event.id;
        activeUserId = event.userId;
        nameInput.value = event.name;
        locationInput.value = event.location;
        dateInput.value = event.date;
      });
  },
  deleteEvent(eventId) {
      return fetch(`http://localhost:8088/events/${eventId}`, {
          method: "DELETE"
      }).then(response => response.json());
  }
};

export default eventAPI;
