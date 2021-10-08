import axios from "axios";
// import TestMessage from '../utils/TestMessage';
import Message from "../utils/Message";

axios.interceptors.response.use(
  (success) => {
    if (
      success.status &&
      success.status === 200 &&
      success.data.status === 500
    ) {
      Message.error(success.data.message);
      return;
    }
    if (success.data.message) {
      Message.success(success.data.message);
    }
    return success.data;
  },
  (error) => {
    if (error.response.status === 504 || error.response.status === 404) {
      Message.error("服务器被吃了( ╯□╰ )");
    } else if (error.response.status === 403) {
      Message.error("权限不足，请联系管理员");
    } else if (error.response.status === 401) {
    } else {
      if (error.response.data.message) {
        Message.error(error.response.data.message);
      } else {
        Message.error("未知错误!");
      }
    }
    return;
  }
);

const baseUrl = "";

export const postKeyValueRequest = (url, params, base = baseUrl) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function (data) {
        let ret = "";
        for (let i in data) {
          ret +=
            encodeURIComponent(i) + "=" + encodeURIComponent(data[i]) + "&";
        }
        return ret;
      },
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
export const postRequest = (url, params, base = baseUrl) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
  });
};

export const postFileRequest = (url, params, base = baseUrl) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    header: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const putRequest = (url, params, base = baseUrl) => {
  return axios({
    method: "put",
    url: `${base}${url}`,
    data: params,
  });
};
export const getRequest = (url, params, base = baseUrl) => {
  return axios({
    method: "get",
    url: `${base}${url}`,
    params: params,
  });
};
export const deleteRequest = (url, params, base = baseUrl) => {
  return axios({
    method: "delete",
    url: `${base}${url}`,
    params: params,
  });
};
