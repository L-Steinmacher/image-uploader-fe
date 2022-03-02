import axios from "axios";

const uploadWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
            "Conetent-Type": "multipart/form-data"
        },
        baseURL: `http://localhost:2019`
    });
}

export default uploadWithAuth;