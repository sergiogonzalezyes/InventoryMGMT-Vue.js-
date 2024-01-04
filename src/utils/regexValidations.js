export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const usernameRegex = /^[a-zA-Z0-9]{6,20}$/;
export const passwordRegex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()!?])(?=\S+$).{8,20}$/;
export const emailOrUsernameRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$|^[a-zA-Z0-9]{6,20}$/;