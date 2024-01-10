<template>
    <div class="header">
        <p>Hello</p>
    </div>
</template>
  
<script setup>
import { theme } from '../../../styles/theme.js';

</script>
  
<style scoped>
.header {
    position: absolute;
    top: 0;
    background-color: v-bind('theme.colors.primary.dark');
    padding: v-bind('theme.spacing.sm');
    width: 100%;
    text-align: center;
    z-index: 100;
}

</style>
  