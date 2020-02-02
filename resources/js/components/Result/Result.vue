<template>
    <div class="Result">
        <div class="mx-auto mt-5 col-10">
            <div v-if="user !== null">
                <p class="h2">こんにちは、{{ user.name }}さん</p>
                {{ user }}
                <button
                    class="btn btn-success col-12 fixed-bottom"
                    @click="logout"
                >
                    ログアウト
                </button>
            </div>
            <div v-else>
                <div class="jumbotron">
                    <p>ログインして下さい。</p>
                    <button class="btn btn-success my-3" @click="redirectLogin">
                        ログイン
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Result',
    computed: {
        user() {
            return this.$store.getters['auth/user'];
        },
        isAuth() {
            return this.$store.getters['auth/status'];
        }
    },
    methods: {
        async logout() {
            await this.$store.dispatch('auth/logout');
            this.$router.push('/');
        },
        redirectLogin() {
            this.$router.push('/')
        }
    }
};
</script>
