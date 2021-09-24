import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: `https://localhost:2019`
    });
}

export default axiosWithAuth;