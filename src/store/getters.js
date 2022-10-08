import * as RootGetterTypes from "./getter-types";
export default {
  [RootGetterTypes.GET_USER]: ({ user }) => user.userData,

  [RootGetterTypes.GET_TOKEN]: ({ user }) => user.token,

  [RootGetterTypes.GET_LOGIN]: ({ user }) => user.loggedIn,
};
