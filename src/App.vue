<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/partials/NavBar.vue'
import { theme } from './styles/theme.js';
import RegisterNotifier from "./components/auth/authNotifications/RegisterNotifier.vue"
import { useRegisterState } from '@/utils/useRegisterState.js'

const registerState = useRegisterState();

</script>

<template>
  <div class="app-container">
    <div v-show="registerState.isRegistered">
      <RegisterNotifier />
    </div>

    <NavBar />
    <div class="page-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: v-bind('theme.colors.primary.light');
  color: v-bind('theme.colors.white');
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.page-container {
  padding: 0;
}
</style>
