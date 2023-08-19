const fetch = require("node-fetch");
const process = require("process");

function sendDiscordNotification(webhookUrl) {
    const message = {
        content: "New track has been released! Check it out: https://realberg.github.io/",
        username: "TaiTake GitHub Notifier"
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.status === 204) {
            console.log("Notification sent successfully.");
        } else {
            console.error("Failed to send notification:", response.status);
        }
    })
    .catch(error => {
        console.error("Error sending notification:", error);
    });
}

if (require.main === module) {
    const webhookUrl = process.env.WEBHOOK_URL;
    sendDiscordNotification(webhookUrl);
}
