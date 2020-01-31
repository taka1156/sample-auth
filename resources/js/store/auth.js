import axios from "axios";

const status = {
    user: null,
    status: false
};

const getters = {
    user(state) {
        return state.user;
    },
    status(state) {
        return state.status;
    }
};

const mutations = {
    setUser(state, data) {
        state.user = data;
    },
    setStatus(state, data) {
        state.status = data;
    }
};

const actions = {
    async currentUser(context) {
        const response = await axios
            .get("/api/user")
            .catch(e => console.log(e.response));
        context.commit("setUser", response.data || null);
        context.commit("setStatus", response.data ? true : false);
    },
    async register(context, user) {
        const response = await axios
            .post("/api/register", user)
            .catch(e => console.log(e.response));
        context.commit("setUser", response.data);
        context.commit("setStatus", true);
    },
    async login(context, user) {
        const response = await axios
            .post("/api/login", user)
            .catch(e => console.log(e.response));
        context.commit("setUser", response.data);
        context.commit("setStatus", true);
    },
    async logout(context) {
        await axios.post("/api/logout").catch(e => console.log(e.response));
        context.commit("setUser", null);
        context.commit("setStatus", false);
    }
};

export default {
    namespaced: true,
    status,
    getters,
    mutations,
    actions
};
