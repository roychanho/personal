import axios from "axios";
import { API_URL } from "@env";

let APIHelperState = {
  accountExpired: () => {},
  getAccountToken: () => {},
};

const APIHelper = axios.create({
  baseURL: API_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

APIHelper.interceptors.request.use((config) => {
  config.headers.Authorization = APIHelperState.getAccountToken();
  return config;
});

APIHelper.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    // const message = _.get(response, 'data.message');
    // const errorKey = _.findKey(ERROR_CODE, value => value === message);

    // switch (errorKey) {
    //   case INVALID_USER:
    //   case EXPIRED_TOKEN:
    //     APIHelperState.accountExpired();
    //     break;
    //   default:
    //     console.log('response', response);
    //     console.log('message', message);
    // }
    return error;
  }
);

export const updateAPIHelperState = (newState = {}) => {
  APIHelperState = { ...APIHelperState, ...newState };
};

export const getBanners = () => APIHelper.post("/api/get-banners");

export const getTutorial = () => APIHelper.get("/api/getTutorial");

export const getNews = () => APIHelper.get("/api/getNews");

export const getAboutContent = () => APIHelper.get("/api/getAboutContent");

export const getOnBoarding = () => APIHelper.get("/api/getOnBoarding");

export const register = ({ email, password }) =>
  APIHelper.post("/api/register", { email, password });

export const login = ({ email, password }) =>
  APIHelper.post("/api/login", { email, password });

export const getUser = () => APIHelper.get("/api/user");

export const forgotPassword = ({ email }) =>
  APIHelper.post("/api/forgot-password", { email });

export const updateUserProfile = ({
  firstName,
  lastName,
  gender,
  ageGroup,
  height,
  weight,
}) =>
  APIHelper.post("/api/post-update-user", {
    firstName,
    lastName,
    gender,
    ageGroup,
    height,
    weight,
  });
