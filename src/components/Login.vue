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
import { ref } from 'vue'

const username = ref('')
const password = ref('')



</script>

<style scoped>


* {
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Default font */
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #36393f; /* Discord-like dark background */
    color: #fff; /* White text for contrast */
    font-family: 'Helvetica Neue', Arial, sans-serif; /* Modern, clean font */
    margin: 0;
    padding: 0;
}

.loginwrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2f3136; /* Slightly lighter dark background for form */
    border-radius: 8px; /* Smooth rounded corners */
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
    width: 300px; /* Fixed width for a clean look */
}

.username, .password, button {
    margin: 10px 0; /* Uniform margin */
    border: none; /* No border */
    border-radius: 4px; /* Slightly rounded corners */
    padding: 10px; /* Comfortable padding */
    width: 100%; /* Full width inputs and button */
}

.username, .password {
    background-color: #40444b; /* Slightly different background for inputs */
    color: #dcddde; /* Light grey text */
}

.display {
    display: flex;
    flex-direction: column;
    width: 100%; /* Full width for the display container */
}

.display input, .display button {
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.display button {
    background-color: #5865f2; /* Discord's brand color for the button */
    color: white;
    font-weight: bold;
    cursor: pointer; /* Hand cursor on hover */
    transition: background-color 0.3s; /* Smooth transition for button hover */
}

.display button:hover {
    background-color: #4752c4; /* Slightly darker color on hover */
}

.display p {
    margin: 10px 0;
    color: #b9bbbe; /* Light grey for text */
}
</style>
