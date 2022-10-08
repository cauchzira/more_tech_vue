export default {
  loading: false,
  user: {
    token: window.localStorage.getItem("access_token") || "",
    loggedIn: window.localStorage.getItem("userExist") || false,
    userData: JSON.parse(window.localStorage.getItem("user")) || null
  },
  permissionsUser: [],
  openedMenuItem: {}
};