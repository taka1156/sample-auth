<template>
    <div class="AuthDefault">
        <div class="mx-auto mt-5 col-10">
            <button
                class="btn btn-success my-3 col-12"
                @click="isToggle = !isToggle"
            >
                {{ btnLabel }}
            </button>
            <fieldset class="border mb-4">
                <create-form v-if="!isToggle" @create-account="createAccount" />
                <login-form v-else @login="login" />
            </fieldset>
        </div>
    </div>
</template>

<script>
import CreateForm from './parts/CreateForm.vue';
import LoginForm from './parts/LoginForm.vue';

export default {
    name: 'AuthDefault',
    components: {
        'create-form': CreateForm,
        'login-form': LoginForm
    },
    data() {
        return {
            isToggle: false
        };
    },
    computed: {
        btnLabel() {
            if (this.isToggle) {
                return '新規作成';
            } else return 'ログイン';
        },
        isAuth() {
            return this.$store.getters['auth/status'];
        }
    },
    mounted() {
        if (this.isAuth) this.$router.push('/result');
    },
    methods: {
        async createAccount(user) {
            await this.$store.dispatch('auth/register', user);
            this.$router.push('/result');
        },
        async login(user) {
            await this.$store.dispatch('auth/login', user);
            this.$router.push('/result');
        }
    }
};
</script>
