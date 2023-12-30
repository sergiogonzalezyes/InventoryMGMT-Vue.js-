<template>
    <nav class="navbar">
        <ul class="nav-links">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/products">Products</RouterLink>
            </li>
            <li>
                <RouterLink to="/inventory">Inventory</RouterLink>
            </li>
            <li>
                <RouterLink to="/login">Login</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { theme } from '../../styles/theme.js'
</script>

<style scoped>
.navbar {
    background-color: v-bind('theme.colors.primary.dark');
    padding: v-bind('theme.spacing.md');
    display: flex;
    justify-content: center;
    align-items: center;
    height: v-bind('theme.spacing.md');
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

.nav-links li {
    margin-left: v-bind('theme.spacing.md');
    margin-right: v-bind('theme.spacing.md');

}

.nav-links a {
    color: v-bind('theme.colors.white');
    text-decoration: none;
}

.nav-links a:hover {
    color: v-bind('theme.colors.secondary.dark');
}
</style>
