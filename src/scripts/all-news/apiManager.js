/* Author: Trinity Terry */
/* Purpose: Fetches Data from JSON file for friend articles page*/

const apiManager = {
	getFriends(){
		const userid = sessionStorage.getItem("activeUsers");
		return fetch(`http://localhost:8088/friends?friendUserId=${userid}`)
		.then(resp => resp.json());
	}
};

export default apiManager;
