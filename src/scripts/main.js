import article from "./articles/main.js";
import kkMainManager from "./friends/kkMain.js";
import tasks from "./tasks/main.js";
import eventsMainManager from './events/eventsMain.js'

sessionStorage.setItem(`activeUsers`, 1);
const activeUser = sessionStorage.getItem('activeUsers');
tasks.runIt();
const getURL = () => {
  let url = window.location.href;
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1);

  if (activeUser) {
    if (queryString == "home") {
      article.runIt();
    } else if (queryString == "friends") {
      kkMainManager.kkRunIt(activeUser);
    } else if (queryString == "logout") {
      document.getElementById("container").innerHTML = "<h1>Logout screen</h1>"

    } else if (queryString == "events") {
      eventsMainManager.eventNavButton(sessionStorage.getItem(`activeUsers`));
    } else if (queryString == undefined){
      
    } else {
      window.location.href = "http://127.0.0.1:8080/src/index.html";

    }
  }
};

getURL();
