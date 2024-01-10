<template>
  <AuthContainer :fields="formFields" :name="`${register.title}`" @form-submit="handleFormSubmit" />
</template>

<script setup>
import { ref } from 'vue'
import AuthContainer from './AuthContainer.vue';
import register from '@/locales/en/register.json'
import UserService from '../../services/api/userService.js';
import { handleNotification } from '@/components/auth/authNotifications/RegisterNotifier.vue';

const formFields = ref([
  { label: register.email, type: register.emailType, placeholder: register.emailPlaceholder, value: register.emptyValue },
  { label: register.username, type: register.usernameType, placeholder: register.usernamePlaceholder, value: register.emptyValue },
  { label: register.password, type: register.passwordType, placeholder: register.passwordPlaceholder, value: register.emptyValue },
  { label: register.confirmPassword, type: register.confirmPasswordType, placeholder: register.confirmPasswordPlaceholder, value: register.emptyValue }
]);


const handleFormSubmit = async (formData) => {
  try {
    const response = await UserService.registerUser(formData);
    console.log(response);

    if (response.status === 201) {
      handleNotification("John Doe");
    }
  }
  catch (error) {
    console.log(error);
  }
}

</script>

<style scoped></style>
