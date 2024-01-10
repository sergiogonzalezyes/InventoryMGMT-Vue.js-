// useRegisterState.js
import { reactive, provide, inject } from 'vue';

const RegisterStateSymbol = Symbol();

export const useRegisterState = () => {
  const state = reactive({ isRegistered: false });

  provide(RegisterStateSymbol, state);

  return state;
}

export const useRegisterStateInject = () => {
  const state = inject(RegisterStateSymbol);
  if (!state) {
    throw new Error('useRegisterStateInject must be used within a provider');
  }
  return state;
}


