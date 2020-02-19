import eventsEventListenerManager from "./friendEventListener.js";
import renderManager from "../renderManager.js";
import htmlManager from "./friendEventsHtmlCreator.js";


const eventsMainManager = {
  eventNavButton: activeUsers => {
      renderManager.renderNewPageToDom(htmlManager.addNewEvent);
      eventsEventListenerManager.addEvent(activeUsers);
      eventsEventListenerManager.updateEventListener(activeUsers);
      eventsEventListenerManager.refreshEventContainer(activeUsers);
      eventsEventListenerManager.editEventListener(activeUsers);
  }
};

export default eventsMainManager;
