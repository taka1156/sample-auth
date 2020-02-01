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
        }
    }
};
</script>
