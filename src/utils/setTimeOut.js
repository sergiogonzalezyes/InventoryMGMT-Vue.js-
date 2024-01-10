function showNotification() {
    console.log("NOTIF SHOWING");
}

function checkConditionAndShowNotification(status_code) {
    if (status_code === 201) {
        showNotification();
        setTimeout(() => {
            console.log("NOTIFHIDDEN");
        }, 3000);
    }
}

export default checkConditionAndShowNotification;