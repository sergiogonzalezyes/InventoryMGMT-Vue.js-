<template>
    <div class="wrapper">
        <div class="loginwrapper">
            <h1>Test Login</h1>
            <div class="display">
                <input type="text" placeholder="Username" v-model="username" class="username" />
                <input type="password" placeholder="Password" v-model="password" class="password" />
                <button>Login</button>
            </div>
            <div class="display">
                <p>Username: {{ username }}</p>
                <p>Password: {{ password }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { theme } from '../styles/theme'
import { ref } from 'vue'

const username = ref('')
const password = ref('')



</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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

.username,
.password,
button {
    margin: v-bind('theme.spacing.sm') 0;
    border: none;
    border-radius: v-bind('theme.spacing.xs');
    padding: v-bind('theme.spacing.sm');
    width: 100%;
}

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
