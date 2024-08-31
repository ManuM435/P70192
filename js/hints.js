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

    // Select all elements with the class 'ask-hint-btn'
    const askHintButtons = document.querySelectorAll('.ask-hint-btn');

    askHintButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.disabled = true; // Disable the button

            // Find the closest parent card element
            const card = button.closest('.card');
            // Get the selected subclue value within this card
            const selectedSubclue = card.querySelector('.subclue-select').value;
            // Get a random hint for the selected subclue
            const hint = getRandomHint(selectedSubclue);
            // Find the hint output element within this card
            const hintOutput = card.querySelector('.hint-output');

            const typingSpeed = 75; // Set typing speed
            const extraDelay = 1000; // Set extra delay of 1 second

            typeWriter(hint, hintOutput, typingSpeed, function() {
                setTimeout(function() {
                    button.disabled = false; // Re-enable the button after the delay
                }, extraDelay);
            });
        });
    });
});

// Precomputed hints for each subclue
const hints = {
    "1-1": ["Think about what the pose in the photo is called", "Consider the angle of the pose", "The pose resembles something specific"],
    "2-1": ["The clue is insie the backpack compartment", "The lock's password is the same as it was 7 months ago...", "Acordate cuando elegimos los horarios"], 
    "2-2": ["Roman Empire?"],
    "3-1": [" ", " ", " "],
    "3-2": [" ", " ", " "],
    "3-3": [" ", " ", " "],
    "4-1": ["You can just input the coordinates directly in Google Maps", "Latitude goes first, Longitude second", "Gracias BSU"],
    "4-2": ["Singular Values were calculated by doing the square root of the eigen values of A x At", " The number calculated indicates in which one of the lockers the clue is located"],
    "4-3": ["😘", "💋"], 
    "4-4": ["QR11 se encuentra en el Florence Ball", "The bricks are not what they seem...", "It's in a secret compartment!"],
    "5-1": [" ", " ", " "],
    "5-2": [" ", " ", " "],
    "5-3": [" ", " ", " "],
    "6-1": ["b"],
    "6-2": ["a"],
    "6-3": ["You could try to read most of the text", "You don't actually need to read all of it... you could just read some and a Google Search will do the rest", "Check out 'Fun Text' Google Docs Extension!"],
    "7-1": [" ", " ", " "],
    "7-2": [" ", " ", " "],
    "7-3": [" ", " ", " "],
    "8-1": [" ", " ", " "],
    "8-2": [" ", " ", " "],
    "8-3": [" ", " ", " "],
    "9-1": [" ", " ", " "],
    "9-2": [" ", " ", " "],
    "9-3": [" ", " ", " "],
    "10-1": [" ", " ", " "],
    "10-2": [" ", " ", " "],
    "10-3": [" ", " ", " "],
    "11-1": [" ", " ", " "],
    "11-2": [" ", " ", " "],
    "11-3": [" ", " ", " "],
    "12-1": [" ", " ", " "],
    "12-2": [" ", " ", " "],
    "12-3": [" ", " ", " "],
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

// Updated typeWriter function with callback
function typeWriter(text, element, speed, callback) {
    element.textContent = ""; // Clear existing text
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback(); // Call the callback function once typing is done
        }
    }

    type();
}

function revealAnswer(element) {
    element.style.display = 'none';
    element.nextElementSibling.style.display = 'inline';
}
