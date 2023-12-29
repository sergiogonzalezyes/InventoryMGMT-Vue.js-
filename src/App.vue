<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="page">
    <NavBar /> <!-- Navbar at the top -->

    <!-- Div that holds the RouterView -->
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

.body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make the page at least as tall as the viewport */
  background-color: #36393f; /* Discord-like dark background */
  color: #fff; /* White text for contrast */
  font-family: 'Helvetica Neue', Arial, sans-serif; /* Modern, clean font */
  margin: 0;
  width: 100%;
}

.content {
  /* Style for the content area */
  padding-top: 20px; /* Add some spacing between the navbar and the content */
}
</style>
