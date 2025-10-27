// File: /js-animation-app/js-animation-app/src/app.js

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("girlfriend-button");
    const message = document.getElementById("response-message");

    button.addEventListener("click", function() {
        const userResponse = confirm("Do you want to be my girlfriend?");

        if (userResponse) {
            message.textContent = "I love you too.";
        } else {
            evadeButton();
        }
    });

    function evadeButton() {
        const buttonRect = button.getBoundingClientRect();
        const offset = 20;

        document.addEventListener("mousemove", function(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            if (
                mouseX >= buttonRect.left - offset &&
                mouseX <= buttonRect.right + offset &&
                mouseY >= buttonRect.top - offset &&
                mouseY <= buttonRect.bottom + offset
            ) {
                const newX = Math.random() * (window.innerWidth - buttonRect.width);
                const newY = Math.random() * (window.innerHeight - buttonRect.height);
                button.style.position = "absolute";
                button.style.left = newX + "px";
                button.style.top = newY + "px";
            }
        });
    }
});