const baseUrl = "http://localhost:8088/"

const apiManager = {
    getFriendList: (userId, resource) => {
      return fetch (`${baseUrl}${resource}/?userId=${userId}`)
      .then(r=>r.json());
    },
    getUser: (id) => {
      return fetch (`${baseUrl}users?id=${id}`).then(r=>r.json());
    },
     getUserAndFriendMessages:(friendId, activeUserId) => {
       return fetch (`${baseUrl}messages?friendId=${friendId}&userId=${activeUserId}`).then(r=>r.json());
     },
     getMessages:() => {
       return fetch (`${baseUrl}messages?_expand=user`).then(r=>r.json())
     },
     postMessage:(message)=> {
         return fetch(`${baseUrl}messages`,{
             method: "POST",
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify(message)

         }).then(r=>r.json());
     }

}
export default apiManager;