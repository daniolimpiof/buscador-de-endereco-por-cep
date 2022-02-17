import axios from "axios";

const api = axios.create({
    // a url base que nunca muda.
    baseURL: "https://viacep.com.br/ws/"
})

export default api;
