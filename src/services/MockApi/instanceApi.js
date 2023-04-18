import axios from "axios";

export const BASE_URL = "https://64372ebe3e4d2b4a12e53434.mockapi.io/tweets/";
export const PAGE = 1;
export const PER_PAGE = 8;

export const instanceUser = axios.create({ baseURL: BASE_URL });
