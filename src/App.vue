<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/partials/NavBar.vue'
import { theme } from './styles/theme.js';
import RegisterNotifier from "./components/auth/authNotifications/RegisterNotifier.vue"



</script>

<template>
  <div class="app-container">
    <RegisterNotifier />
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
