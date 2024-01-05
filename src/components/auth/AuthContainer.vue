<template>
    <div class="wrapper">
        <div class="loginwrapper">
            <div class="display">
                <form @submit.prevent="handleSubmit">
                    <div v-for="(field, index) in fields" :key="index" class="form-group">
                        <label :for="`field-${index}`" class="label">{{ field.label }}</label>
                        <input
                            :type="field.type"
                            :placeholder="field.placeholder"
                            :class="field.class"
                            v-model="field.value"
                            :id="`field-${index}`"
                            :name = "field.name"
                            class="input"
                            @input="validateField(field)"
                        />
                        <div class="error-wrapper">
                            <span :class="['error', { active: field.error }]">{{ field.error }}</span>
                        </div>
                    </div>
                    <button v-if="name === 'login'" type="submit" class="button">Login</button>
                    <button v-else-if="name === 'register'" type="submit" class="button">Register</button>
                </form>
                <div class="buttons">
                    <template v-if="name === 'register'">
                        <p>Already have an account?</p>
                        <button @click="routerLoginRegister('login')" class="button">Login</button>
                    </template>
                    <template v-else>
                        <p>Don't have an account?</p>
                        <button @click="routerLoginRegister('register')" class="button">Register Here</button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { theme } from '../../styles/theme'
import { useRouter } from 'vue-router'
import { RouterService } from '../services/routerService.js'
import { useValidation } from '../services/validationService.js'


const props = defineProps({
    fields: Array,
    name: String
})

const { validateField, validateForm } = useValidation()
const emit = defineEmits(['form-submit'])
const routerService = new RouterService(useRouter());

const handleInput = (field) => {
    validateField(field);
}

const handleSubmit = () => {
    let isFormValid = validateForm(props.fields);
    
    if (isFormValid) {
        const formData = props.fields.reduce((submission, field) => {
            submission[field.name] = field.value;
            return submission;
        }, {});
        emit('form-submit', formData);
    }
}

const routerLoginRegister = (route) => {
    routerService.navigateTo(route);
}

</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - (v-bind('theme.spacing.lg') * 2));
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

.form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: v-bind('theme.spacing.xs') 0 v-bind('theme.spacing.xs') 0;
}

.label {
    margin: v-bind('theme.spacing.xs') 0;
}

.input {
    border: none;
    border-radius: v-bind('theme.spacing.xs');
    padding: v-bind('theme.spacing.sm') 0 v-bind('theme.spacing.sm') v-bind('theme.spacing.sm');
    width: 100%;
    background-color: #40444b;
    color: #dcddde;
}

.email,
.password,
.username,
button {
    margin: v-bind('theme.spacing.lg') 0;
    border: none;
    border-radius: v-bind('theme.spacing.xs');
    padding: v-bind('theme.spacing.sm');
    width: 100%;
}

.buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

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
    padding: v-bind('theme.spacing.xs') 0;
    margin: 0;
    line-height: v-bind('theme.spacing.sm');
    overflow: hidden;
}

.error-wrapper {
    display: flex;
    justify-content: flex-end;
    visibility: hidden;
    height: 0.5em;
    padding: v-bind('theme.spacing.sm') 0 v-bind('theme.spacing.xs') 0;
}

.error {
    color: red;
    font-size: v-bind('theme.fonts.size.sm');
    line-height: 0.5em;
    visibility: hidden;
}

.error.active {
    visibility: visible;
}

</style>
