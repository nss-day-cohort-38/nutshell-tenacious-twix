const htmlFactoryManager = {
    generateFriendCardHtml:(obj) => {
      if(obj.nickName===undefined){
        return `
      <div class = "kkcard" id="card-${obj.id}">
      <div>
        <img class="friendProfPic" id="prof-pic-${obj.id}" src="https://media.tenor.com/images/b5abed30c3b61e75907475636efde7df/tenor.gif">
        <h1 class="friendName"id="name-${obj.id}">${obj.user.username}</h1></div>
        <h4 class="otherName" id="userId-${obj.userId}"><span id="nickName-${obj.id}">Would you like to add a Nickname?</span><i  id="reName-${obj.id}"class="edit icon"></i></h4>
        <button class="delete-btn" id="delete-${obj.id}" type="button">Delete</button> 
      </div>
      `
      } else {
      return `
      <div class = "kkcard" id="card-${obj.id}">
      <div>
        <img class="friendProfPic" id="prof-pic-${obj.id}" src="https://media.tenor.com/images/b5abed30c3b61e75907475636efde7df/tenor.gif">
        <h1 class="friendName"id="name-${obj.id}">${obj.user.username}</h1></div>
        <h4 class="otherName" id="userId-${obj.userId}">NickName: <span id="nickName-${obj.id}">${obj.nickName}</span><i  id="reName-${obj.id}"class="edit icon"></i></h4>
        <button class="delete-btn" id="delete-${obj.id}" type="button">Delete</button> 
      </div>
      `
    }},
    generateMessageHtml: (obj) => {
    return `
    <div class="kk-message"id="message-${obj.id}">
    <div id="text-${obj.id}">${obj.message}</div>
    <p><a class="un" id="message-username-${obj.userId}">${obj.user.username}</a></p>
    <div id="edit-Buttons-${obj.id}">

    </div>
    </div>
    `
    }, generateAddFriendCard: (obj) => {
      return `<div id="friend-${obj.id}">
      <img class="addFriendProfPic" id="prof-pic-${obj.id}" src="https://media.tenor.com/images/b5abed30c3b61e75907475636efde7df/tenor.gif">
      <h1 id="friend-name">${obj.username}</h1>
      <button type="button" id="add-${obj.id}">Add Friend</button>
      <button type="button" id="nevermind">Nevermind</div>
      </div>`
    }
    , generateAddFriendCardTwo: (obj) => {
      return `<div id="friend-${obj.id}">
      <img class="addFriendProfPic" id="prof-pic-${obj.id}" src="https://media.tenor.com/images/b5abed30c3b61e75907475636efde7df/tenor.gif">
      <h1 id="friend-name">${obj.username}</h1>
      <button id="sayHi-${obj.id}">Say Hi!</button>
      <button type="button" id="nevermind">Nevermind</div>
      </div>`
    }
}
export default htmlFactoryManager;

