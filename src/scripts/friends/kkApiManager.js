//Kurt Krafft => this page handles all my api calls

const baseUrl = "http://localhost:8088/"

const apiManager = {
    getFriendList: (userId, resource) => {
      return fetch (`${baseUrl}${resource}/?_expand=user&friendUserId=${userId}`)
      .then(r=>r.json());
    }, 
    addFriend:(obj) => {
      return fetch(`${baseUrl}friends`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(r=>r.json());
    },
    updateNickName:(obj, id) => {
      return fetch(`${baseUrl}friends/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(r=>r.json())
    },
    deleteFriend: (id)=> {
      return fetch(`${baseUrl}friends/${id}`, {
        method: "DELETE"
      }
      ).then(r=>r.json())
    },
    getUser: (id) => {
      return fetch (`${baseUrl}users?id=${id}`).then(r=>r.json());
    },
     getUserAndFriendMessages:(friendId, activeUserId) => {
       return fetch (`${baseUrl}messages?friendId=${friendId}&userId=${activeUserId}`)
        .then(r=>r.json());
     },
     getMessages:() => {
       return fetch (`${baseUrl}messages?_expand=user`)
       .then(r=>r.json())
     },
     postMessage:(message)=> {
         return fetch(`${baseUrl}messages`,{
             method: "POST",
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify(message)

         }).then(r=>r.json());
     },
     deleteMessage: (id) => {
      console.log(`${baseUrl}messages/${id}`)
       return fetch (`${baseUrl}messages/${id}`, {
         method: 'DELETE',
       }).then(r=>r.json());
     },
     editMessage: (id, object) => {
       
       return fetch(`${baseUrl}messages/${id}`, {
         
         method: "PUT",
         headers: {
           "content-type":"application/json"
         },
         body: JSON.stringify(object)
       }).then(r=>r.json());
       
     },
     checkOneFriend: (friendUserId, userId) => {
       return fetch (`${baseUrl}friends?friendUserId=${userId}&userId=${friendUserId}`)
        .then(r=>r.json())
     }, 
     searchFriendByName:(username) => {
       return fetch(`${baseUrl}users?username=${username}`)
       .then(r=>r.json());;
     }

}
export default apiManager;