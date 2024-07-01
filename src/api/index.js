import axios from "axios";

const axiosAsos = axios.create({
    baseURL: "https://api.tvmaze.com"
})

export default axiosAsos