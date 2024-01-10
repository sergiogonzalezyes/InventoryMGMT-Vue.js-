function showNotification() {
    console.log("Something happened!");
}

function checkConditionAndShowNotification(username) {
    if (username) {
        showNotification();
        setTimeout(() => {
            // Hide the notification after 3 seconds
            console.log(username);
        }, 3000);
    }
}
export default checkConditionAndShowNotification;


