import axios from "axios";

const API =  {
    createUser: function (userInfo) {
        return axios.post("/api/createUser", userInfo);
    },
    findUser: function(user) {
        return axios.post("/api/signin", user);
    },
    login: function() {

    },
    getRentals: function(city) {
        return axios.get("/api/" + city);
    },
    saveListing: function(listingInfo) {
        return axios.post("/api/addToFavorites", listingInfo);
    },
    getFavorites: function() {
        return axios.get("/api/favorites");
    },
    deleteFavListing: function(id) {
        return axios.delete("/api/delete/" + id)
    },
    signOut: function(){
        return axios.get("api/logout")
    }
}

export default API;