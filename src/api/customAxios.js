import axios from "axios";
import Cookies from "js-cookie";

const SERVER_ADDRESS = 'https://jsonplaceholder.typicode.com';
//새로운 axios instance 생성 해서 변수에 할당하기
export const customAxios = axios.create({
  baseURL: `${SERVER_ADDRESS}`,
  Headers: {

    access_token: Cookies.get('access_token')
  }
});


