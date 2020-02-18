import renderManager from "../renderManager.js";
import eventAPI from "./eventsAPI.js";
import htmlManager from "./eventsHtmlCreator.js";

const eventsEventListenerManager = {

  clearForm: () => {
    document.querySelector("#eventId").value = "";
    document.querySelector("#nameInput").value = "";
    document.querySelector("#locationInput").value = "";
    document.querySelector("#dateInput").value = "";
  },
  refreshEventContainer: activeUserId => {
    eventAPI.getEvents(activeUserId).then(events => {
      renderManager.renderEventsToContainer(
        events,
        htmlManager.eventsHtmlCreator
      );
    });
  },
  eventsNav: activeUserId => {
    const eventNavButton = document.querySelector("#eventNavButton");
    eventNavButton.addEventListener("click", () => {
      renderManager.renderNewPageToDom(htmlManager.eventForm);
      eventsEventListenerManager.updateEventListener(activeUserId);
      refreshEventContainer(activeUserId);
      eventsEventListenerManager.editEventListener(activeUserId);
    });
  },

  updateEventListener: activeUserId => {
    const updateButton = document.querySelector("#updateEvent");
    updateButton.addEventListener("click", () => {
      const hiddenEventId = document.querySelector("#eventId");
      const nameInput = document.querySelector("#nameInput");
      const locationInput = document.querySelector("#locationInput");
      const dateInput = document.querySelector("#dateInput");
      const newEvent = {
        userId: parseInt(activeUserId),
        name: nameInput.value,
        location: locationInput.value,
        date: dateInput.value
      };
      if (hiddenEventId.value !== "") {
        newEvent.id = parseInt(hiddenEventId.value);
        eventAPI.updateEvent(newEvent).then(() => {
          eventsEventListenerManager.refreshEventContainer(activeUserId);
          eventsEventListenerManager.clearForm();
        });
      } else {
        eventAPI.saveEvent(newEvent).then(() => {
          eventsEventListenerManager.refreshEventContainer(activeUserId);
          eventsEventListenerManager.clearForm();
        });
      }
    });
  },

  editEventListener: activeUserId => {
    container.addEventListener("click", event => {
      if (event.target.id.startsWith("delete-")) {
        const check = confirm("Are you sure you want to delete this event?");
        if (check == true) {
          const eventToDelete = event.target.id.split("-")[1];
          eventAPI.deleteEvent(eventToDelete).then(() => {
            eventsEventListenerManager.refreshEventContainer(activeUserId);
            eventsEventListenerManager.clearForm();
          });
        }
      } else if (event.target.id.startsWith("edit-")) {
        const eventToEdit = event.target.id.split("-")[1];
        eventAPI.refillEvent(eventToEdit);
      }
    });
  }
};

export default eventsEventListenerManager;
