import axios from 'axios';

const status = {
    user: null
};

const getters = {
    user(state) {
        return state.user;
    },
    status(state) {
        return state.user ? true : false;
    }
};

const mutations = {
    setUser(state, data) {
        state.user = data;
    }
};

const actions = {
    async currentUser(context) {
        const response = await axios
            .get('/api/user')
            .catch(e => console.log(e.response));
        context.commit('setUser', response.data || null);
    },
    async register(context, user) {
        const response = await axios
            .post('/api/register', user)
            .catch(e => console.log(e.response));
        context.commit('setUser', response.data);
    },
    async login(context, user) {
        const response = await axios
            .post('/api/login', user)
            .catch(e => console.log(e.response));
        context.commit('setUser', response.data);
    },
    async logout(context) {
        await axios.post('/api/logout').catch(e => console.log(e.response));
        context.commit('setUser', null);
    }
};

export default {
    namespaced: true,
    status,
    getters,
    mutations,
    actions
};
