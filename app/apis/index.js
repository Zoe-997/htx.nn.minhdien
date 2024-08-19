import axios from "axios";
import { constants } from "@/app/libs/constants";
import { getToken } from "@/app/libs/auth";

const exceptPrefix = ["/login", "/register"];
const checkEndPoint = (endpoint) => {
  for (const prefix of exceptPrefix) {
    if (endpoint.includes(prefix)) {
      return true;
    }
  }
  return false;
};

export const callApi = (endPoint, method, body) => {
  if (checkEndPoint(endPoint) === false) {
    axios.interceptors.request.use(
      (config) => {
        const token = getToken("user");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response) => {
        if (response?.data?.code === 12052700) {
          Promise.reject(response);
        }
        return response;
      },
      (error) => {
        console.log("error: 11111", error);
        if (error?.response?.data?.code === 404) {
        } else if (error?.response?.data?.code === 401) {
          removeToken();
        }
        return Promise.reject(error);
      }
    );
  }
  try {
    return axios({
      method,
      url: `${constants.API_URL_DEV}${endPoint}`,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.status);
    } else if (error.request) {
      console.error("No response received from server");
    } else {
      console.error("Error setting up request:", error.message);
    }
  }
};
