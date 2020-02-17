const htmlFactoryManager = {
    generateFriendCardHtml:(obj, friendId) => {
      return `
      <div class = "kkcard" id="card-${obj.id}">
      <div>
        <img class="friendProfPic" id="prof-pic-${obj.id}" src="https://media.tenor.com/images/b5abed30c3b61e75907475636efde7df/tenor.gif">
        <h1 class="friendName"id="name-${obj.id}">${obj.username}</h1></div>
        
      </div>
      `
    },
    generateMessageHtml: (obj) => {
    return `
    <div class="kk-message"id="message-${obj.id}">
    <div id="text-${obj.id}">${obj.message}</div>
    <p><a class="un" id="message-username-${obj.userId}">${obj.user.username}</a></p>
    <div id="edit-Buttons-${obj.id}">

    </div>
    </div>
    `
    }
}
export default htmlFactoryManager;

{/* <button class="delete-btn" id="delete-${friendId}" type="button">Delete</button> */}