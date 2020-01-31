<template>
    <div class="Result">
        <div class="mx-auto mt-5 col-10">
            <div v-if="user">
                <p class="h2">こんにちは、{{ user.name }}さん</p>
                <button class="btn btn-success col-12 fixed-bottom" @click="logout">
                    ログアウト
                </button>
            </div>
            <div class="jumbotron" v-else>
                <p>ログインしてください</p>
                <button class="btn btn-success" @click="jump">
                    ログイン
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Result",
    computed: {
        user() {
            return this.$store.getters['auth/user'];
        }
    },
    methods: {
        async logout() {
            await this.$store.dispatch('auth/logout');
            this.jump();
        },
        jump(){
            this.$router.push('/');
        }
    }
};
</script>
