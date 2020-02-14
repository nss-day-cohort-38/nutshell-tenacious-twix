const htmlFactoryManager = {
    generateFriendCardHtml:(obj, friendId) => {
      return `
      <div id="card-${obj.id}">
        <img id="prof-pic-${obj.id}" src="https://media.tenor.com/images/b5abed30c3b61e75907475636efde7df/tenor.gif">
        <h1 id="name-${obj.id}">${obj.username}</h1>
        <button id="delete-${friendId}" type="button">Delete</button>
      </div>
      `
    },
    generateMessageHtml: (obj) => {
    return `
    <div id="message-${obj.id}">
    <h6>${obj.message}</h6>
    <p>${obj.user.username}</p>
    <button id="delete-${obj.id}" type="button">Delete</button>
    </div>
    `
    }
}
export default htmlFactoryManager;