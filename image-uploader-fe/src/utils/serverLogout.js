import axiosWithAuth from "./axiosWithAuth";

export default function serverLogout() {

    axiosWithAuth()
        .get(`/logout`)
        .then(res => {
            localStorage.clear('id');
            localStorage.clear('token');
        })
        .catch(err => {
            console.log(err.message)
        })
}