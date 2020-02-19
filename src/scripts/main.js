import article from "./articles/main.js";
import kkMainManager from "./friends/kkMain.js";
import tasks from "./tasks/main.js";
import eventsMainManager from './events/eventsMain.js'
import auth from "./auth/main.js";
import allNews from './all-news/main.js'

sessionStorage.setItem(`activeUsers`, 1);
const activeUser = sessionStorage.getItem('activeUsers');

auth.runIt();
const getURL = () => {
  let url = window.location.href;
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1);
  console.log()
  
  if (activeUser) {
     
    if(queryString !== undefined) tasks.runIt();
    

     if(queryString == "home"){
        allNews.runIt();
     }else if (queryString == "personalnews") {
      article.runIt();
    } else if (queryString == "friends") {
      kkMainManager.kkRunIt(activeUser);
    } else if (queryString == "logout") {
      document.getElementById("container").innerHTML = "<h1>Logout screen</h1>"

    } else if (queryString == "events") {
      eventsMainManager.eventNavButton(sessionStorage.getItem(`activeUsers`));
    } else if (queryString == undefined){
      
    } else {
      window.location.href = `${window.location.href.split("html")[0]}html?home`;
    }
  }
};

getURL();
