import article from "./articles/main.js";
import kkMainManager from "./friends/kkMain.js";
import tasks from "./tasks/main.js";
import eventsMainManager from "./events/eventsMain.js";
import auth from "./auth/main.js";
import allNews from "./all-news/main.js";
import unsplash from "./articles/apiManager.js";
import eventsEventListenerManager from "./friends-events/friendEventListener.js"


const navbarArray = ["home", "personalnews", "friends", "logout", "events", "home&events", "home&news"];
const hashnavbarArray = ["#home", "#personalnews", "#friends", "#logout", "#events", "#home&events", "#home&news"];
window.addEventListener("hashchange", function() {
  displayHash();
});

document.getElementsByTagName("NAV")[0].addEventListener("click", () => {
  if(navbarArray.includes(event.target.id)){
    window.location.href = `${window.location.href.split("src")[0]}src/index.html#${event.target.id}`;
  }
});

const getURL = (hash = window.location.hash) => {
  var queryString = hash;
  const activeUser = sessionStorage.getItem("activeUsers");
	if (activeUser !== null) {
		$('.ui.inline.dropdown').dropdown();
		document.getElementById('big-nav').classList.remove('hidden-item');
		document.getElementById('small-nav').classList.remove('hidden-item');

		if (hash == '#home') {
			document.getElementById('dropdown-nav-text').innerText =
				'Menu';
			const container = document.getElementById('body-container');
      container.style.height = "88vh"
      container.style.boxShadow = "rgb(0, 0, 0) 0px 0px 19px inset"
			unsplash.getSiteUrl('452289/1000x1000').then(data => {
				const imgUrl = data.url;
				container.style.backgroundImage = `url(${imgUrl})`;
        container.innerHTML = `
        <h1 id="welcome-message">Welcome to Twixbook</h1>
          <div id="container">
           <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div> 
        </div>
        <div id="sidebar-button-container">
          <div id="sidebar-button" class="ui labeled button" tabindex="0">
  
          </div>
        </div>
          `;	
        document.getElementById('container').innerHTML = '';
        tasks.runIt();
      });
    } else {
      const container = document.getElementById('body-container');
      container.style.height = "auto";
      container.style.boxShadow = "none"
			
				container.style.backgroundImage = ``;
        container.innerHTML = `
        <div id="container">
         <div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div> 
      </div>
      <div id="sidebar-button-container">
        <div id="sidebar-button" class="ui labeled button" tabindex="0">

        </div>
      </div>
        `;	
        if(hashnavbarArray.includes(hash)){

          tasks.runIt();
        }

        if (queryString == '#personalnews') {
          document.getElementById('dropdown-nav-text').innerText =
            'Personal News';
          article.runIt();
        } else if (queryString == '#friends') {
          document.getElementById('dropdown-nav-text').innerText = 'Friends';
          kkMainManager.kkRunIt(activeUser);
        } else if (queryString == '#logout') {
          document.getElementById('dropdown-nav-text').innerText = 'Logout';
          
          sessionStorage.removeItem('activeUsers');
          const url = `${
            window.location.href.split('src')[0]
          }src/index.html`;
          window.history.pushState({path:url},'',url);
          document.getElementById('big-nav').classList.add('hidden-item');
        document.getElementById('small-nav').classList.add('hidden-item');
          auth.runIt();
        } else if (queryString == '#events') {
          document.getElementById('dropdown-nav-text').innerText = 'Events';
          eventsMainManager.eventNavButton(
            sessionStorage.getItem(`activeUsers`)
          );
        } else if (queryString == "" || queryString == '#') {
          const url = `${
            window.location.href.split('src')[0]
          }src/index.html#home`;
          window.history.pushState({path:url},'',url);
          document.getElementById('dropdown-nav-text').innerText =
            'Menu';
          const container = document.getElementById('body-container');
          container.style.height = "88vh"
          container.style.boxShadow = "rgb(0, 0, 0) 0px 0px 19px inset"
          unsplash.getSiteUrl('452289/1000x1000').then(data => {
            const imgUrl = data.url;
            container.style.backgroundImage = `url(${imgUrl})`;
            container.innerHTML += `<h1 id="welcome-message">Welcome to Twixbook</h1>`;
            document.getElementById('container').innerHTML = '';
          });
    
        } else if (queryString == '#home&news') {
          document.getElementById('dropdown-nav-text').innerText =
            'Friend News';
          allNews.runIt();
        } else if (queryString == '#home&events') {
          document.getElementById('dropdown-nav-text').innerText =
            'Friend Events';
            eventsEventListenerManager.refreshEventContainer(sessionStorage.getItem(`activeUsers`))
        } else {
          history.back()
        }		
      }
	} else {
    const url = `${
      window.location.href.split('src')[0]
    }src/index.html`;
    window.history.pushState({path:url},'',url);
    document.getElementById('big-nav').classList.add('hidden-item');
		document.getElementById('small-nav').classList.add('hidden-item');
		auth.runIt();
  }
};

function displayHash() {
  var theHash = window.location.hash;
  if (theHash.length == 0) { theHash = "_index"; }
  getURL(theHash)
  return true;
}
getURL();