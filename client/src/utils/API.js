import axios from "axios";

export default {
    createUser: function (userInfo) {
        return axios.post("/createUser", userInfo);
    }
}