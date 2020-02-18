const baseUrl = 'http://localhost:8088/';

const apiManager = {
    getUserProfileViaEmail: (email) => {
      return fetch (`${baseUrl}users?email=${email}`)
        .then(r=>r.json())
    },
    addNewProfile:(obj) => {
      return fetch (`${baseUrl}users`, {
          method: "POST",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(obj)
      }).then(r=>r.json())
    }
}
export default apiManager;