import article from "./articles/main.js";
import kkMainManager from "./friends/kkMain.js";
import tasks from "./tasks/main.js";

sessionStorage.setItem("activeUsers", 1);
const activeUser = sessionStorage.getItem("activeUsers");

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
    } else if (queryString == "events") {
    }
  }
};

getURL();
