import axios from "axios";

export default {

  loginUser: function(user) {
    return axios.post("/api/passport/login", user);
  },

  signupUser: function(user) {
    return axios.post("/api/passport/signup", user);
  },

  logoutUser: function() {
    return axios.get("/api/passport/logout");
  },

  //get info for currently logged in user
  getUser: function() {
    return axios.post("/api/passport/user_data");
  }
};
