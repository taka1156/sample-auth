<template>
    <div class="Result">
        <p class="h2">こんにちは、{{ user.name }}さん</p>
        <button class="btn btn-success col-12 fixed-bottom" @click="logout">
            ログアウト
        </button>
    </div>
</template>

<script>
export default {
    name: 'Result',
    mounted() {
        const STATUS = this.$store.getters['auth/status'];
        if (!STATUS) this.$router.push('/');
    },
    computed: {
        user() {
            return this.$store.getters['auth/user'];
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
