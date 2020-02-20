<<<<<<< HEAD
import article from "./articles/main.js";
import kkMainManager from "./friends/kkMain.js";
import tasks from "./tasks/main.js";
import eventsMainManager from './events/eventsMain.js'
import auth from "./auth/main.js";
import allNews from './all-news/main.js'
import eventsEventListenerManager from './friends-events/friendEventListener.js';

// sessionStorage.setItem(`activeUsers`, 1);
const activeUser = sessionStorage.getItem('activeUsers');

const getURL = () => {
  let url = window.location.href;
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1);
  console.log()
  
  if (activeUser) {
     
    if(queryString !== undefined) tasks.runIt();
  
    console.log(queryString);

     if(queryString == "home"){
       document.getElementById("container").innerHTML = `
       
       <a class="" href="?home&events" id="friendEvents">Events</a>
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
      eventsEventListenerManager.refreshEventContainer(sessionStorage.getItem(`activeUsers`));


    }
  }else {
    auth.runIt()
  }
=======
import article from './articles/main.js';
import kkMainManager from './friends/kkMain.js';
import tasks from './tasks/main.js';
import eventsMainManager from './events/eventsMain.js';
import auth from './auth/main.js';
import allNews from './all-news/main.js';
import unsplash from './articles/apiManager.js';

const activeUser = sessionStorage.getItem('activeUsers');

const getURL = () => {
	let url = window.location.href;
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
	console.log(activeUser);
	if (activeUser !== null) {
		$('.ui.inline.dropdown').dropdown();
		document.getElementById('big-nav').classList.remove('hidden-item');

		document.getElementById('small-nav').classList.remove('hidden-item');

		if (queryString !== undefined) tasks.runIt();

		if (queryString == 'home') {
			document.getElementById('dropdown-nav-text').innerText =
				'Menu';
			const container = document.getElementById('body-container');

			unsplash.getSiteUrl('452289/1000x1000').then(data => {
				const imgUrl = data.url;
				container.style.backgroundImage = `url(${imgUrl})`;
				container.innerHTML += `<h1 id="welcome-message">Welcome to Twixbook</h1>`;
				document.getElementById('container').innerHTML = '';
			});
		} else if (queryString == 'personalnews') {
			document.getElementById('dropdown-nav-text').innerText =
				'Personal News';
			article.runIt();
		} else if (queryString == 'friends') {
			document.getElementById('dropdown-nav-text').innerText = 'Friends';
			kkMainManager.kkRunIt(activeUser);
		} else if (queryString == 'logout') {
			document.getElementById('dropdown-nav-text').innerText = 'Logout';

			sessionStorage.removeItem('activeUsers');
			window.location.href = `${
				window.location.href.split('src')[0]
			}src/index.html`;
		} else if (queryString == 'events') {
			document.getElementById('dropdown-nav-text').innerText = 'Events';

			eventsMainManager.eventNavButton(
				sessionStorage.getItem(`activeUsers`)
			);
		} else if (queryString == undefined || queryString == '') {
			window.location.href = `${
				window.location.href.split('src')[0]
			}src/index.html?home`;
		} else if (queryString == 'home&news') {
			document.getElementById('dropdown-nav-text').innerText =
				'Friend News';

			allNews.runIt();
		} else if (queryString == 'home&events') {
			document.getElementById('dropdown-nav-text').innerText =
				'Friend Events';
		}
	} else {
		auth.runIt();
	}
>>>>>>> e44e3a95a24d04152418b6862cc05c9f1dea7f0c
};

getURL();
