import axios from 'axios';

const REACT_APP_API_TOKEN = "11a491920500e8f2fcbecf979ef431173148697c25696eb3ec9649bcfb44aef9643ae1e312212a802188c2103d1b75606b0187beb50f897fd6cadd7aae9e12dc4be1b1e980d8a1ff9408103dacc46357d46e7cd4b84af819e3e7bfd13e7e6af5c302c1145d71357dce15580b0490280e70581f83d780be6713e346327bc93042"
const REACT_APP_API_URL = "https://strapi-data-app.onrender.com/api";

export const request = axios.create({ 
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: 'bearer ' + REACT_APP_API_TOKEN,
  },
});
