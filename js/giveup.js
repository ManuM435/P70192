document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.bouncing-circle');
    const container = document.querySelector('.bouncing-container');
    const header = document.querySelector('header'); 
    const bigMessage = document.querySelector('.big-message'); // Adjust selector as needed
    
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert rem to pixels
    const circleSize = 3.5 * rem; // Diameter of the circle in pixels

    let x = container.clientWidth / 2; // Start in the middle of the container
    let y = container.clientHeight / 2; // Start in the middle of the container
    let dx = 2.25; // Speed in the x direction
    let dy = 2.25; // Speed in the y direction

    // Calculate heights and adjust container height
    const headerHeight = header.offsetHeight;
    const containerHeight = container.offsetHeight;
    const bigMessageHeight = bigMessage.offsetHeight;
    const totalUpperBound = headerHeight + bigMessageHeight;


    function bounce() {
        x += dx;
        y += dy;

        // Check for collision with walls and reverse direction
        if (x + circleSize > container.clientWidth || x < 0) {
            dx = -dx;
        }
        if (y + circleSize > containerHeight || y < totalUpperBound) {
            dy = -dy;
        }

        circle.style.left = x + 'px';
        circle.style.top = y + 'px';

        requestAnimationFrame(bounce);
    }

    bounce();
});
