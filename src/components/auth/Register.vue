<template>
    <AuthContainer :fields="formFields" :name="`${register.title}`" @form-submit="handleFormSubmit" />

</template>

<script setup>
import { ref } from 'vue'
import AuthContainer from './AuthContainer.vue';
import register from '../../locales/en/register.json'

const formFields = ref([
  { label: register.email, type: register.emailType, placeholder: register.emailPlaceholder, value: register.emptyValue},
  { label: register.username, type: register.usernameType, placeholder: register.usernamePlaceholder, value: register.emptyValue},
  { label: register.password, type: register.passwordType, placeholder: register.passwordPlaceholder, value: register.emptyValue},
  { label: register.confirmPassword, type: register.confirmPasswordType, placeholder: register.confirmPasswordPlaceholder, value: register.emptyValue}
]);

const handleFormSubmit = (formData) => {
    console.log(formData)
}

</script>

<style scoped>

</style>
