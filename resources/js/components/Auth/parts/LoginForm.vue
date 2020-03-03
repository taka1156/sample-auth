<template>
    <div class="LoginForm">
        <legend>ログインフォーム</legend>
        <form @submit.prevent class="mx-auto col-8">
            <label for="email">Email:</label>
            <input
                type="text"
                id="email"
                class="mx-auto form-control"
                v-model="user.email"
                required
            />
            <label for="password">PassWord:</label>
            <input
                type="password"
                id="password"
                class="mx-auto form-control"
                v-model="user.password"
                minlength="8"
                required
            />
            <button class="btn btn-success my-3" @click="login">
                ログイン
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            this.$emit('login', this.user);
        }
    }
};
</script>
