import axios from 'axios';

export const usersAPI = {
    async getUsers() {
        let response = await axios.get('https://social-network.samuraijs.com/api/1.0/users');
        return response.data.items;
    }
}