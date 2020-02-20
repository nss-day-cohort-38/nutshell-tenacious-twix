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
  console.log(activeUser) 
  if (activeUser !== null) {

    $('.ui.inline.dropdown').dropdown();
    document.getElementById("big-nav").classList.remove("hidden-item");
    document.getElementById("small-nav").classList.remove("hidden-item");

    if(queryString !== undefined) tasks.runIt();
  

     if(queryString == "home"){
       document.getElementById("container").innerHTML = `
       
       <a class="" href="?home&events" id="Home">Events</a>
       <a class="" href="?home&news" id="eventNavButton">News</a>
     
       `;
     }else if (queryString == "personalnews") {
      document.getElementById("dropdown-nav-text").innerText = "Personal News"
      article.runIt();
    } else if (queryString == "friends") {
      document.getElementById("dropdown-nav-text").innerText = "Friends"
      kkMainManager.kkRunIt(activeUser);
    } else if (queryString == "logout") {
      document.getElementById("dropdown-nav-text").innerText = "Logout"

      sessionStorage.removeItem('activeUsers')
    window.location.href = `${window.location.href.split("src")[0]}src/index.html`;
    } else if (queryString == "events") {
      document.getElementById("dropdown-nav-text").innerText = "Events"

      eventsMainManager.eventNavButton(sessionStorage.getItem(`activeUsers`));
    } else if (queryString == undefined){
      window.location.href = `${window.location.href.split("src")[0]}src/index.html?home`;
    } else if (queryString == "home&news"){
      document.getElementById("dropdown-nav-text").innerText = "Friend News"

      allNews.runIt();
    } else if(queryString == "home&events"){
      document.getElementById("dropdown-nav-text").innerText = "Friend Events"

      
    }
  }else {
    // document.getElementById("big-nav").classList.add("hidden-item");
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
