import axios from "axios";

export const baseAPI = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'x-api-key': '9cef1f5f-a2e6-463a-a962-9fdac5545579'
  }
});
