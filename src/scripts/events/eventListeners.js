import renderManager from "../renderManager.js";
import eventAPI from "./eventsAPI.js"
import htmlManager from "./eventsHtmlCreator.js"

const eventNavButton = document.querySelector("#eventNavButton");
const hiddenEntryId = document.querySelector("#entryId");
const nameInput = document.querySelector("#nameInput");
const locationInput = document.querySelector("#locationInput");
const dateInput = document.querySelector("#dateInput");
const updateButton = document.querySelector("#update");
const container = document.querySelector("#container");


const eventsAddEventListener = (activeUserId) => {
    eventNavButton.addEventListener("click", () => {
       eventAPI.getEvents(activeUserId).then(events=> {
        renderManager.renderEventsToContainer(events, htmlManager.eventsHtmlCreator)})
    })
}

const clearForm = () => {
    hiddenEntryId.value = "";
    nameInput.value = "";
    locationInput.value = "";
    dateInput.value = "";
}

const updateEventListener = () => {
    updateButton.addEventListener("click", () => {
        container.innerHTML = "";
        const newEvent = {
            eventId: parseInt()
        }
    })
}

export default eventsAddEventListener;

