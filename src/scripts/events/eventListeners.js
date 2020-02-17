import renderManager from "../renderManager.js";
import eventAPI from "./eventsAPI.js";
import htmlManager from "./eventsHtmlCreator.js";

const eventNavButton = document.querySelector("#eventNavButton");
const hiddenEntryId = document.querySelector("#entryId");
const nameInput = document.querySelector("#nameInput");
const locationInput = document.querySelector("#locationInput");
const dateInput = document.querySelector("#dateInput");

const clearForm = () => {
    document.querySelector("#entryId").value = "";
    document.querySelector("#nameInput").value = "";
    document.querySelector("#locationInput").value = "";
    document.querySelector("#dateInput").value = "";
  },
  eventsEventListenerManager = {
    eventsNav: activeUserId => {
      eventNavButton.addEventListener("click", () => {
        eventAPI.getEvents(activeUserId).then(events => {
          renderManager.renderEventsToContainer(
            events,
            htmlManager.eventsHtmlCreator
          );
          eventsEventListenerManager.updateEventListener(activeUserId);
          eventsEventListenerManager.editEventListener();
        });
      });
    },

    updateEventListener: activeUser => {
      const updateButton = document.querySelector("#updateEvent");
      updateButton.addEventListener("click", () => {
        const container = document.querySelector("#container");
        const hiddenEntryId = document.querySelector("#entryId");
        const nameInput = document.querySelector("#nameInput");
        const locationInput = document.querySelector("#locationInput");
        const dateInput = document.querySelector("#dateInput");
        console.log(nameInput);
        const newEvent = {
          userId: parseInt(activeUser),
          name: nameInput.value,
          location: locationInput.value,
          date: dateInput.value
        };
        if (hiddenEntryId.value !== "") {
          newEvent.id = parseInt(hiddenEntryId);
          eventAPI.updateEvent(newEvent).then(() => {
            eventAPI
              .getEvents()
              .then(renderManager.renderEventsToContainer)
              .then(clearForm);
          });
        } else {
          eventAPI.saveEvent(newEvent).then(() => {
            eventAPI
              .getEvents()
              .then(renderManager.renderEventsToContainer)
              .then(clearForm);
          });
        }
        container.innerHTML = "";
      });
    },

    editEventListener: () => {
      container.addEventListener("click", event => {
        if (event.target.id.startsWith("delete-")) {
          const check = confirm("Are you sure you want to delete this event?");
          if (check == true) {
            const eventToDelete = event.target.id.split("-")[1];
            eventAPI
              .deleteEvent(eventToDelete)
              .then(eventAPI.getEvents)
              .then(renderManager.renderEventsToContainer)
              .then(clearForm);
          }
        } else if (event.target.id.startsWith("edit-")) {
          const eventToEdit = event.target.id.split("-")[1];
          eventAPI.refillEvent(eventToEdit);
        }
      });
    }
  };

export default eventsEventListenerManager;
