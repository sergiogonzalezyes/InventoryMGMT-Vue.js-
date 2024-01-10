<!-- RegisterNotifier.vue -->
<template>
    <div :class="['header', { active: notificationVisible }]">
        <p>Hello</p>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { theme } from '../../../styles/theme.js';
import checkConditionAndShowNotification from '@/utils/setTimeOut';

const notificationVisible = ref(false);

function showNotification() {
    console.log("Something happened!");
}

// Use the new syntax for defining functions
const handleNotification = (username) => {
    if (username) {
        showNotification();
        setTimeout(() => {
            // Hide the notification after 3 seconds
            console.log(username);
            notificationVisible.value = false;
        }, 3000);

        // Show the notification
        notificationVisible.value = true;
    }
};

</script>
  
<style scoped>
.header {
    position: absolute;
    top: 0;
    background-color: v-bind('theme.colors.primary.dark');
    padding: v-bind('theme.spacing.sm');
    width: 100%;
    text-align: center;
    visibility: hidden;
    z-index: 100;
}

.header.active {
    visibility: visible;
}
</style>
  