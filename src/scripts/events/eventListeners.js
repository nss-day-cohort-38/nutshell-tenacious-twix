import renderManager from "../renderManager.js";
import eventAPI from "./eventsAPI.js";
import htmlManager from "./eventsHtmlCreator.js";

const eventsEventListenerManager = {
  refreshEventContainer: activeUserId => {
    eventAPI.getEvents(activeUserId).then(events => {
      events.sort((a, b) => new Date(a.date) - new Date(b.date));
      renderManager.renderEventsToContainer(
        events,
        htmlManager.eventsHtmlCreator
      );
      if (document.getElementById("eventsContainer").childElementCount !== 0) {
      eventsEventListenerManager.signifyNextEvent();
      }
    });
  },

  signifyNextEvent: () => {
    let firstEvent = document.getElementById("eventsContainer")
      .firstElementChild;
    firstEvent.classList.add("first-event");
  },

  clearForm: () => {
    document.querySelector("#eventId").value = "";
    document.querySelector("#nameInput").value = "";
    document.querySelector("#locationInput").value = "";
    document.querySelector("#dateInput").value = "";
  },

  eventsNav: activeUserId => {
    const eventNavButton = document.querySelector("#eventNavButton");
    eventNavButton.addEventListener("click", () => {
      renderManager.renderNewPageToDom(htmlManager.addNewEvent);
      eventsEventListenerManager.addEvent(activeUserId);
      eventsEventListenerManager.editEventListener(activeUserId);
    });
  },

  addEvent: activeUserId => {
    const addEventButton = document.querySelector("#addEventButton");
    addEventButton.addEventListener("click", () => {
      renderManager.renderNewPageToDom(htmlManager.eventForm);
      eventsEventListenerManager.updateEventListener(activeUserId);
      eventsEventListenerManager.nevermindEventListener(activeUserId);
      eventsEventListenerManager.refreshEventContainer(activeUserId);
    });
  },

  updateEventListener: activeUserId => {
    const updateButton = document.querySelector("#updateEvent");
    const hiddenEventId = document.querySelector("#eventId");
    const nameInput = document.querySelector("#nameInput");
    const locationInput = document.querySelector("#locationInput");
    const dateInput = document.querySelector("#dateInput");
    updateButton.addEventListener("click", () => {
      if (
        nameInput.value === "" ||
        locationInput.value === "" ||
        dateInput.value === ""
      ) {
        alert("You must fill all fields to sumbit an event.");
      } else if (Date.parse(dateInput.value) < Date.now())
      {
        alert("You may not add an event from the past.")
      } else {
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
            renderManager.renderNewPageToDom(htmlManager.addNewEvent);
            eventsEventListenerManager.addEvent(activeUserId);
          });
        } else {
          eventAPI.saveEvent(newEvent).then(() => {
            eventsEventListenerManager.refreshEventContainer(activeUserId);
            renderManager.renderNewPageToDom(htmlManager.addNewEvent);
            eventsEventListenerManager.addEvent(activeUserId);
          });
        }
      }
    });
  },

  nevermindEventListener: activeUserId => {
    const nevermindButton = document.querySelector("#nevermindEvent");
    nevermindButton.addEventListener("click", () => {
      eventsEventListenerManager.refreshEventContainer(activeUserId);
      renderManager.renderNewPageToDom(htmlManager.addNewEvent);
      eventsEventListenerManager.addEvent(activeUserId);
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
            const hiddenEventId = document.querySelector("#eventId");
            if (hiddenEventId === null) {}
            else if(parseInt(hiddenEventId.value) == eventToDelete) {
              eventsEventListenerManager.clearForm();
            }
          });
        }
      } else if (event.target.id.startsWith("edit-")) {
        renderManager.renderNewPageToDom(htmlManager.eventForm);
        eventsEventListenerManager.refreshEventContainer(activeUserId);
        eventsEventListenerManager.updateEventListener(activeUserId);
        eventsEventListenerManager.nevermindEventListener(activeUserId);
        const eventToEdit = event.target.id.split("-")[1];
        eventAPI.refillEvent(eventToEdit);
      }
    });
  }
};

export default eventsEventListenerManager;
