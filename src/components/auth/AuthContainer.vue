<template>
    <div class="wrapper">
        <div class="loginwrapper">
            <div class="display">
                <h1 v-if="name === login.title" class="title"> {{ login.title }}</h1>
                <h1 v-else class="title"> {{ register.title }} </h1>
                <form @submit.prevent="handleSubmit">
                    <div v-for="(field, index) in fields" :key="index" class="form-group">
                        <label :for="`field-${index}`" class="label">{{ field.label }}</label>
                        <input
                            :type="field.type"
                            :placeholder="field.placeholder"
                            :class="field.class"
                            v-model="field.value"
                            :id="`field-${index}`"
                            class="input"
                            @input="handleInput(field)"
                        />
                        <div class="error-wrapper">
                            <span :class="['error', { active: field.error }]">{{ field.error }}</span>
                        </div>
                    </div>
                    <button v-if="name === login.login" type="submit" class="button"> {{ login.login }}</button>
                    <button v-else type="submit" class="button"> {{ register.register }}</button>
                </form>
                <div class="divider"></div>
                <div class="buttons">
                    <template v-if="name === register.register">
                        <p>{{ register.alreadyHaveAccount }}</p>
                        <button @click="routerLoginRegister(login.login)" class="button">{{ login.login }}</button>
                    </template>
                    <template v-else>
                        <p>{{ login.dontHaveAccount }}</p>
                        <button @click="routerLoginRegister(register.register)" class="button"> {{ register.register }}</button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { theme } from '../../styles/theme'
import { useRouter } from 'vue-router'
import { RouterService } from '../../services/routerService.js'
import { useValidation } from '../../services/validationService.js'
import login from '../../locales/en/login.json'
import register from '../../locales/en/register.json'
import determineLoginType from '@/utils/loginTypeDetector'

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
        const formData = {};
        let loginInputField;

        props.fields.forEach(field => {
            if (field.label === login.emailOrUsername) {
                loginInputField = field;
            } else {
                formData[field.label] = field.value;
            }
        });

        if (loginInputField) {
            const loginType = determineLoginType(loginInputField.value);
            formData[loginType] = loginInputField.value;
        }

        console.log('AuthContainer:', formData);
        emit('form-submit', formData);

    };
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

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: v-bind('theme.spacing.md') 0;
}

.form-group {
    display: flex;
    flex-direction: column;
    width: 100%;

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

.divider {
    border-top: 1px solid v-bind('theme.colors.primary.light');
    margin: v-bind('theme.spacing.xl') 0;
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
    color: rgb(248, 120, 120);
    font-size: v-bind('theme.fonts.size.sm');
    line-height: 0.5em;
    visibility: hidden;
}

.error.active {
    visibility: visible;
}

</style>
