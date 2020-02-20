const eventAPI = {
    getFriends(activeUserId) {
      return fetch(
        `http://localhost:8088/friends?friendUserId=${activeUserId}`
      ).then(resp => resp.json());
    },
    getEvents(UserId) {
      return fetch(
        `http://localhost:8088/events?userId=${UserId}`
      ).then(resp => resp.json());
    },
  };
  
  export default eventAPI;
  