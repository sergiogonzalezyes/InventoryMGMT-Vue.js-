import axios from 'axios';

// https
const API_URL = 'https://localhost:7059/api/User';

// http
// const API_URL = 'http://localhost:5298/User';

export default class UserService {
    static async registerUser(data) {
        return axios.post(`${API_URL}/register`, data);
    }

    static async loginUser(data) {
        return axios.post(`${API_URL}/login`, data);
    }
}