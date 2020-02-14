const objectManager = {
    createFriendObject: (id) => {
      const name = document.getElementById(`name-${id}`);
      const obj = {
          "id": id,
          "name": name.innerHTML
      }
      return obj
    }
}

export default objectManager;