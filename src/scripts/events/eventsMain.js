import eventsEventListenerManager from "./eventListeners.js";
import renderManager from "../renderManager.js";
import htmlManager from "./eventsHtmlCreator.js";


const eventsMainManager = {
  eventNavButton: activeUsers => {
      renderManager.renderNewPageToDom(htmlManager.eventForm);
      eventsEventListenerManager.updateEventListener(activeUsers);
      eventsEventListenerManager.refreshEventContainer(activeUsers);
      eventsEventListenerManager.editEventListener(activeUsers);
  }
};

export default eventsMainManager;
