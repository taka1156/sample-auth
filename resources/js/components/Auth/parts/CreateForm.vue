<template>
    <div class="CreateForm">
        <legend>新規登録</legend>
        <form @submit.prevent class="mx-auto col-8">
            <label for="userName">Name:</label>
            <input
                type="text"
                id="userName"
                class="mx-auto form-control"
                v-model="user.name"
                required
            />
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
                required
            />
            <label for="passwordConfirme">PassWord(確認):</label>
            <input
                type="password"
                id="passwordConfirme"
                class="mx-auto form-control"
                v-model="user.password_confirmation"
                minlength="8"
                required
            />
            <button class="btn btn-success my-3" @click="createAccount()">
                新規作成
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "CreateForm",
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        };
    },
    methods: {
        createAccount() {
            this.$emit("create-account", this.user);
        }
    }
};
</script>
