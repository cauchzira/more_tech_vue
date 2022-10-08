import Request from "../helpers/Request";
import BaseService from "./BaseService";

class AuthService extends BaseService {
  constructor(token) {
    super(token);
  }

  async auth(data) {
    const authUrl = "/api/v1/user/token";
    return await Request.post(authUrl, data);
  }

  async logout(data) {
    const logoOutUrl = "/api/v1/auth/logout/";
    const headers = {
      Authorization: `Bearer ${this.userToken}`
    };

    return await Request.post(logoOutUrl, data, { headers });
  }

  async refresh() {
    const refreshTokenUrl = "/api/v1/user/token/refresh";
    const headers = {
      Authorization: `Bearer ${this.userToken}`
    };

    return await Request.post(refreshTokenUrl, {}, { headers });
  }

  async getEmployee() {
    const employeeUrl = "/api/v1/employee/current/";
    const headers = {
      Authorization: `Bearer ${this.userToken}`
    };

    return await Request.get(employeeUrl, { headers });
  }

}

export default AuthService;
