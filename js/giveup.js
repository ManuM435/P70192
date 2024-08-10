// JavaScript to make the "Yes" button bounce
document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("bouncing-yes");
    const rightSide = document.querySelector(".right-side");

    let x = Math.random() * (rightSide.clientWidth - yesButton.clientWidth);
    let y = Math.random() * (rightSide.clientHeight - yesButton.clientHeight);
    let dx = 2;
    let dy = 2;

    function moveYesButton() {
        x += dx;
        y += dy;

        // Bounce off the left or right edge
        if (x + yesButton.clientWidth > rightSide.clientWidth || x < 0) {
            dx = -dx;
        }

        // Bounce off the top or bottom edge
        if (y + yesButton.clientHeight > rightSide.clientHeight || y < 0) {
            dy = -dy;
        }

        yesButton.style.left = `${x}px`;
        yesButton.style.top = `${y}px`;

        requestAnimationFrame(moveYesButton);
    }

    moveYesButton();
});
