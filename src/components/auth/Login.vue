<template>
    <AuthContainer :fields="formFields" :name="`${login.title}`" @form-submit="handleFormSubmit" />

</template>

<script setup>
import { ref } from 'vue'
import AuthContainer from './AuthContainer.vue';
import login from '../../locales/en/login.json'

const formFields = ref([
  { label: login.emailOrUsername, type: login.emailOrUsernameType, placeholder: login.emailOrUsernamePlaceholder, value: login.emptyValue },
  { label: login.password, type: login.passwordType, placeholder: login.passwordPlaceholder, value: login.emptyValue }
]);

const handleFormSubmit = (formData) => {
    console.log(formData)
}

</script>

<style scoped>

</style>
