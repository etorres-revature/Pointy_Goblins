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
    }
}

export default API;