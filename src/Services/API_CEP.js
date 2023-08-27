import axios from "axios";

const CEP_API = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default CEP_API;
