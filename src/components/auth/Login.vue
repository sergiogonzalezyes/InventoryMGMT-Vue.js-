<template>
    <AuthContainer :fields="loginFields" :name="login" @form-submit="handleLoginSubmit" />

</template>

<script setup>
import { theme } from '../../styles/theme'
import { ref } from 'vue'
import AuthContainer from './AuthContainer.vue';

const loginFields = ref([
  { label: 'Email or Username', type: 'text', placeholder: 'Enter your email or username', value: '' },
  { label: 'Password', type: 'password', placeholder: 'Enter your password', value: '' }
]);

const login = ref('login')

const handleLoginSubmit = (formData) => {
    console.log(formData)
}

</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - (v-bind('theme.spacing.lg') * 2));
    color: v-bind('theme.colors.white');
    font-family: 'Helvetica Neue', Arial, sans-serif;    
}

.loginwrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: v-bind('theme.colors.primary.dark');
    border-radius: v-bind('theme.spacing.md');
    padding: v-bind('theme.spacing.xl');
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 300px;
}

.email,
.password,
.username,
button {
    margin: v-bind('theme.spacing.sm') 0;
    border: none;
    border-radius: v-bind('theme.spacing.xs');
    padding: v-bind('theme.spacing.sm');
    width: 100%;
}

.email,
.username,
.password {
    background-color: #40444b;
    color: #dcddde;
}

.display {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.display input,
.display button {
    box-sizing: border-box;
}

.display button {
    background-color: v-bind('theme.colors.secondary.light');
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.display button:hover {
    background-color: v-bind('theme.colors.secondary.dark');
}

.display p {
    margin: v-bind('theme.spacing.sm') 0;
    color: v-bind('theme.colors.white');
}
</style>
