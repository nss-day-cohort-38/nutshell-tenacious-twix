import renderManager from "../renderManager.js";
import eventAPI from "./eventsAPI.js";
import htmlManager from "./eventsHtmlCreator.js";

const eventNavButton = document.querySelector("#eventNavButton");
const hiddenEventId = document.querySelector("#eventId");
const nameInput = document.querySelector("#nameInput");
const locationInput = document.querySelector("#locationInput");
const dateInput = document.querySelector("#dateInput");

const clearForm = () => {
    document.querySelector("#eventId").value = "";
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
          eventsEventListenerManager.editEventListener(activeUserId);
        });
      });
    },

    updateEventListener: activeUser => {
      const updateButton = document.querySelector("#updateEvent");
      updateButton.addEventListener("click", () => {
        const container = document.querySelector("#container");
        const hiddenEventId = document.querySelector("#eventId");
        const nameInput = document.querySelector("#nameInput");
        const locationInput = document.querySelector("#locationInput");
        const dateInput = document.querySelector("#dateInput");
        const newEvent = {
          userId: parseInt(activeUser),
          name: nameInput.value,
          location: locationInput.value,
          date: dateInput.value
        };
        console.log(hiddenEventId);
        if (hiddenEventId.value !== "") {
          newEvent.id = parseInt(hiddenEventId.value);
          eventAPI.updateEvent(newEvent).then(() => {
            eventAPI
              .getEvents()
              .then(array => {
                renderManager.renderEventsToContainer(
                  array,
                  htmlManager.eventsHtmlCreator
                );
              })
              .then(clearForm);
          });
        } else {
          eventAPI.saveEvent(newEvent).then(() => {
            eventAPI
              .getEvents()
              .then(array => {
                renderManager.renderEventsToContainer(
                  array,
                  htmlManager.eventsHtmlCreator
                );
              })
              .then(clearForm);
          });
        }
        container.innerHTML = "";
      });
    },

    editEventListener: activeUserId => {
      container.addEventListener("click", event => {
        if (event.target.id.startsWith("delete-")) {
          const check = confirm("Are you sure you want to delete this event?");
          if (check == true) {
            const eventToDelete = event.target.id.split("-")[1];
            eventAPI.deleteEvent(eventToDelete).then(() => {
              eventAPI.getEvents(activeUserId).then(array => {
                renderManager.renderEventsToContainer(
                  array,
                  htmlManager.eventsHtmlCreator
                );
              });
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
