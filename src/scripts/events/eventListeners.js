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
};

const activateButtons = activeUserId => {
  eventAPI.getEvents(activeUserId).then(events => {
    renderManager.renderEventsToContainer(
      events,
      htmlManager.eventsHtmlCreator
    );
    eventsEventListenerManager.updateEventListener(activeUserId);
    eventsEventListenerManager.editEventListener(activeUserId);
  });
};

const eventsEventListenerManager = {
  eventsNav: activeUserId => {
    eventNavButton.addEventListener("click", () =>
      activateButtons(activeUserId)
    );
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
          activateButtons(activeUserId);
        });
      } else {
        eventAPI.saveEvent(newEvent).then(() => {
          activateButtons(activeUserId);
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
            clearForm();
            eventAPI.getEvents(activeUserId).then(events => {
              renderManager.renderEventsToContainer(
                events,
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

const testA = () => {
  console.log("testA")
}

const testB = () => {
  console.log("testB")
}

const testC = () => {
  console.log("testC")
};

export function testA,
export function testB,
export function testC

// export default eventsEventListenerManager;
