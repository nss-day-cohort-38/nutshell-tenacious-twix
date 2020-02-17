import htmlManager from "./events/eventsHtmlCreator.js";

const container = document.getElementById("container");

const renderManager = {
  renderNewPageToDom: html => {
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
    container.innerHTML = "";
    container.innerHTML = htmlManager.eventForm
    arr.forEach(event => {
      const eventHtml = func(event);
      container.innerHTML += eventHtml;
    });
  }
};

export default renderManager;
