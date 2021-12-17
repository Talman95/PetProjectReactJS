import axios from 'axios';

export const usersAPI = {
    async getUsers(page = 1, count = 10) {
        let response = await axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            params: {
                page: page,
                count: count                
            }
        });
        return response.data;
    }
}