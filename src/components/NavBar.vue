<template>
    <nav class="navbar">
        <ul class="nav-links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/products">Products</RouterLink></li>
            <li><RouterLink to="/inventory">Inventory</RouterLink></li>
            <li><RouterLink to="/login">Login</RouterLink></li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
    background-color: #2c2f33;
    padding: 1rem 2rem;
    text-align: center;
}

.nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

.nav-links li {
    margin: 0 1rem;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #7289da; /* Discord brand color for hover effect */
}
</style>
