import axios from "axios";

const API =  {
    createUser: function (userInfo) {
        return axios.post("/api/createUser", userInfo);
    },
    findUser: function(user) {
        return axios.post("/api/signin", user);
    }
}

export default API;