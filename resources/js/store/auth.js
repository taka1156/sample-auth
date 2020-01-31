import axios from "axios";

const status = {
    user: null
};

const getters = {
    status(state) {
        return state.user ? true : false;
    },
    user(state) {
        return state.user;
    }
};

const mutations = {
    setUser(state, data) {
        state.user = data;
        console.log(state.user)
    }
};

const actions = {
    async currentUser(context) {
        const response = await axios
            .get("/api/user")
            .catch(e => console.log(e.response));
        context.commit("setUser", response.data || null);
    },
    async register(context, user) {
        const response = await axios
            .post("/api/register", user)
            .catch(e => console.log(e.response));
        context.commit("setUser", response.data);
    },
    async login(context, user) {
        const response = await axios
            .post("/api/login", user)
            .catch(e => console.log(e.response));
        context.commit("setUser", response.data);
    },
    logout(context) {
        axios.post("/api/logout").catch(e => console.log(e.response));
        context.commit("setUser", null);
    }
};

export default {
    namespaced: true,
    status,
    getters,
    mutations,
    actions
};
