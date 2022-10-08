import axios from "@/services/axios";

function buildServiceResponse(responseData, key) {
  const result = {
    data: null,
    error: null,
    headers: null,
    serverResponse: responseData
  };
  if (!responseData) {
    result.error = -1;
    return result;
  }

  if (responseData.data.access_token || responseData.data.refresh_token) {
    const responseHeaders = {
      access_token: responseData.data.access_token,
      refresh_token: responseData.data.refresh_token
    };
    result.data = responseHeaders;
  }

  if (responseData.status === 200 || responseData.status === 201) {
    result.status = true;
    result.error = 0;
    result.data = responseData.data;
  } else if (responseData.error === 4004) {
    result.status = false;
    result.error = responseData.error;
    result.data = responseData.data;
  } else {
    result.status = false;
    result.error = responseData.error;
  }
  return result;
}

class Request {
  static async _request(
    { method, url, data = null, options },
    { key = "data" } = {}
  ) {
    try {
      let response;

      if (data) {
        response = await axios[method](url, data, options);
      } else {
        response = await axios[method](url, options);
      }
      return buildServiceResponse(response, key);
    } catch (e) {
      if (e.response) {
        return buildServiceResponse(e.response, key);
      } else {
        return buildServiceResponse(null);
      }
    }
  }
  static async get(url, options) {
    return await this._request({ url, options, method: "get" });
  }

  static async post(url, data, options) {
    return await this._request({ url, options, method: "post", data });
  }

  static async put(url, data, options) {
    return await this._request({ url, options, method: "put", data });
  }

  static async delete(url, data) {
    return await this._request({ url, method: "delete", data });
  }
}

export default Request;
