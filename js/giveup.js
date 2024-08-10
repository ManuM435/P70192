document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.bouncing-circle');
    const container = document.querySelector('.bouncing-container');
    
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert rem to pixels
    const circleSize = 3.5 * rem; // Diameter of the circle in pixels

    let x = container.clientWidth / 2; // Start in the middle of the container
    let y = container.clientHeight / 2; // Start in the middle of the container
    let dx = 4; // Speed in the x direction
    let dy = 4; // Speed in the y direction

    function bounce() {
        x += dx;
        y += dy;

        // Check for collision with walls and reverse direction
        if (x + circleSize > container.clientWidth || x < 0) {
            dx = -dx;
        }
        if (y + circleSize > container.clientHeight || y < 0) {
            dy = -dy;
        }

        circle.style.left = x + 'px';
        circle.style.top = y + 'px';

        requestAnimationFrame(bounce);
    }

    bounce();
});
