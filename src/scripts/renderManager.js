// import htmlManager from "./events/eventsHtmlCreator.js";

const container = document.getElementById("container");

const renderManager = {
  renderNewPageToDom: html => {
    container.innerHTML = "";
    container.innerHTML = html;
  },
  renderSingleHtmlToContainer: (html, id) => {
    const element = document.getElementById(`${id}`);
    element.innerHTML += html;
  },
  renderArrayOfHtmlToContainer: (arr, func, id) => {
    arr.forEach(item => {
      const html = func(item);
      const output = document.getElementById(`${id}`);
      html.innerHTML += output;
    });
  },
  renderEventsToContainer: (arr, func) => {
    const eventsContainer = document.getElementById("eventsContainer");
    eventsContainer.innerHTML = "";
    arr.forEach(event => {
      const eventHtml = func(event);
      eventsContainer.innerHTML += eventHtml;
    });
  },
  renderFriendEventsToContainer: (arr, func) => {
    const eventsContainer = document.getElementById("container");
    arr.forEach(event => {
      const eventHtml = func(event);
      eventsContainer.innerHTML += eventHtml;
    });
  }
};

export default renderManager;
