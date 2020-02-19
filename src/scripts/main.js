import article from "./articles/main.js";
import kkMainManager from "./friends/kkMain.js";
import tasks from "./tasks/main.js";
import eventsMainManager from './events/eventsMain.js'
import auth from "./auth/main.js";
import allNews from './all-news/main.js'

// sessionStorage.setItem(`activeUsers`, 1);
const activeUser = sessionStorage.getItem('activeUsers');

const getURL = () => {
  let url = window.location.href;
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1);
  
  if (activeUser) {
     
    if(queryString !== undefined) tasks.runIt();
  

     if(queryString == "home"){
       document.getElementById("container").innerHTML = `
       
       <a class="" href="?home&events" id="Home">Events</a>
       <a class="" href="?home&news" id="eventNavButton">News</a>
     
       `;
     }else if (queryString == "personalnews") {
      article.runIt();
    } else if (queryString == "friends") {
      kkMainManager.kkRunIt(activeUser);
    } else if (queryString == "logout") {
      sessionStorage.removeItem('activeUsers')
    window.location.href = `${window.location.href.split("src")[0]}src/index.html`;
    } else if (queryString == "events") {
      eventsMainManager.eventNavButton(sessionStorage.getItem(`activeUsers`));
    } else if (queryString == undefined){
      auth.runIt();
    } else if (queryString == "home&news"){
      allNews.runIt();
    } else if(queryString == "home&events"){
      
    }
  }else {
    auth.runIt()
  }
};

getURL();

// const logout = () => {
//   const logOutButton = document.getElementById('logout')
//   logOutButton.addEventListener('click', () => {
//     sessionStorage.removeItem('activeUsers')
//     window.location.href = "http://127.0.0.1:8080/src/index.html"
//   })
// }
// logout();
