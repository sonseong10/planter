import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Accept: "application/hal+json",
  },
  paramsSerializer: {
    encode: encodeURIComponent,
    indexes: null,
  },
});
