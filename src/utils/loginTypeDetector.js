function determineLoginType(input) {
    if (input.includes('@') && input.includes('.')) {
        return 'email'
    } else {
        return 'username'
    }
}

export default determineLoginType;