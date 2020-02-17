import renderManager from "../renderManager.js";
import eventAPI from "./eventsAPI.js"
import htmlManager from "./eventsHtmlCreator.js"

const eventNavButton = document.querySelector("#eventNavButton");

const eventsAddEventListener = (activeUserId) => {
    eventNavButton.addEventListener("click", () => {
       eventAPI.getEvents(activeUserId).then(events=> {
        renderManager.renderEventsToContainer(events, htmlManager.eventsHtmlCreator)})
    })
}

export default eventsAddEventListener;