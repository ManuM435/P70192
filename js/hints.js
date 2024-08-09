
$(document).ready(function() {
    $('.toggle-btn').on('click', function() {
        var $this = $(this);
        if ($this.text() === '+') {
            $this.text('-');
        } else {
            $this.text('+');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const revealButtons = document.querySelectorAll('.reveal-btn');

    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const hintCover = this.previousElementSibling;
            hintCover.style.display = 'none';  // Hide the cover
            this.style.display = 'none';       // Hide the "Reveal" button
        });
    });
});

// Precomputed hints for each subclue
const hints = {
    "1-1": ["Clue 1.1 : Think what the pose in the photo is called", "Clue 1.1 : Consider the angle of the pose", "Clue 1.1 : The pose resembles something specific"],
    "1-2": ["Look at the back of the bottle", "The label has a clue", "Check for hidden messages on the bottle"],
    "1-3": ["Focus on the color scheme", "Is there a pattern?", "Colors might indicate something"]
};

// Function to get a random hint
function getRandomHint(subclue) {
    const possibleHints = hints[subclue];
    if (possibleHints) {
        const randomIndex = Math.floor(Math.random() * possibleHints.length);
        return possibleHints[randomIndex];
    }
    return "No hints available for this subclue.";
}

// Function to create typewriter effect with blinking cursor
function typeWriter(text, element, speed = 50, cursorDuration = 2000) {
    element.textContent = ""; // Clear existing text
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    element.appendChild(cursor);

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Keep cursor blinking for an additional 2 seconds after typing completes
            setTimeout(() => {
                cursor.style.opacity = 0; // Fade out cursor after additional 2 seconds
            }, cursorDuration);
        }
    }

    type();
}

// Event listener for "Ask for Hint" button
document.getElementById('ask-hint-btn').addEventListener('click', function() {
    const selectedSubclue = document.getElementById('subclue-select').value;
    const hint = getRandomHint(selectedSubclue);
    const hintOutput = document.getElementById('hint-output');
    typeWriter(hint, hintOutput, 75); // Adjust speed here
});

