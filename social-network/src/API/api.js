import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bbb527b3-6bec-4c67-abf9-15d3ea5311d5'
    }
});

export const usersAPI = {
    async getUsers(page = 1, count = 10) {
        let response = await instance.get('users', {
            params: {
                page: page,
                count: count                
            }
        });
        return response.data;
    },
    async follow(userId) {
        let response = await instance.post('follow/' + userId);
        return response.data;
    },
    async unfollow(userId) {
        let response = await instance.delete('follow/' + userId);
        return response.data;
    }
}

export const profileAPI = {
    async getProfile(userId) {
        let response = await instance.get('profile/' + userId);
        return response.data;
    }
}

export const authAPI = {
    async authMe() {
        let response = await instance.get('auth/me');
        return response.data;
    }
}