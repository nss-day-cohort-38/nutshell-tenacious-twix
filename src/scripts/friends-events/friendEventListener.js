import renderManager from "../renderManager.js";
import eventAPI from "./friendEventsAPI.js";
import htmlManager from "./friendEventsHtmlCreator.js";

const eventsEventListenerManager = {
  refreshEventContainer: activeUserId => {
    eventAPI.getEvents(activeUserId).then(events => {
      events.sort((a, b) => new Date(a.date) - new Date(b.date));
      renderManager.renderFriendEventsToContainer(
        events,
        htmlManager.eventsHtmlCreator
      );
      if (document.getElementById("container").childElementCount !== 0) {
        eventsEventListenerManager.signifyNextEvent();
      }
    });
  },

  signifyNextEvent: () => {
    let firstEvent = document.getElementById("container")
      .firstElementChild;
    firstEvent.classList.add("first-event");
  },
};

export default eventsEventListenerManager;
