const eventAPI = {
    getEvents(activeUserId) {
      return fetch(
        `http://localhost:8088/events?userId=${activeUserId}`
      ).then(resp => resp.json());
    },
  };
  
  export default eventAPI;
  