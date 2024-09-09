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
            this.style.display = 'none';       // Hide the "Reveal"button
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
    "3-1": ["Check for a QR code underneath the _entertainment device_ shown in the photo ", "We came here over a year ago with Mery ", "La casita amarilla es atras de las barras de pull-ups, pasando las canchas de tennis "],
    "3-2": ["Busca un QR pegado en los subibajas de la placita de San Fernando ", "Where we took the iconic photo ", ""],
    "3-3": ["Courtesy of Rosa American Bakery ", "sandwich de... "],
    "4-1": ["You can just input the coordinates directly in Google Maps", "Latitude goes first, Longitude second", "Gracias BSU"],
    "4-2": ["Singular Values were calculated by doing the square root of the eigen values of A x At", "The number calculated indicates in which one of the lockers the clue is located"],
    "4-3": ["😘", "💋"], 
    "4-4": ["QR11 se encuentra outside el Florence Ball", "The bricks are not what they seem...", "It's in a secret compartment!"],
    "4-5": ["Es la cartuchera de alguien you know... "],
    "5-1": ["Es el numero de Oli ", "Son coordenadas de Google Maps "],
    "5-2": ["El bagel que nunca me pude pedir... (i did try it thanks to you) ", "En el estacionamiento de piedritas se ve ", "El mensaje de la publicidad en la pared del lugar "],
    "6-1": ["Check the pot and the coffee table "],
    "6-2": ["You could try to read most of the text", "You don't actually need to read all of it... you could just read some and a Google Search will do the rest", "Check out 'Fun Text' Google Docs Extension!"],
    "7-1": ["They asked to be one of the clue passwords, and I think they earned their spot ", "The coolest team name in the whole Argentina Programming Tournament ", "4 letters, a lot to mean, and means a lot "],
    "8-1": ["The password is the 4-number combination shown by running the code "],
    "9-1": ["Es una de las mesas planas y rectangulares, mirando por la ventana al Lebach-Galperin ", "Checked for a taped paper-written messgae underneath one of the desks "],
    "9-2": ["Again... check for a tapd paper-written message underneath a desk ", "El Aula es V108 "],
    "9-3": ["What I formerly used to call Lago Andresino ", "Donde fuimos despues del parcial de Analisis II "],
    "10-1": ["Rosa de America sobre Uruguay", "La misma mesa que en la iconic flag piture"],
    "10-2": ["Donde almorzamos maybe mas de unas 1,000 veces (really, from some lazy calculations)", "Debajo de la mesa donde muchas veces comimos solos, often antes de Teorica de Analisis II los Miercoles"],
    "10-3": ["Rock & Fellers", "1-word food"],
    "11-1": ["", "", ""],
    "11-2": ["", "", ""],
    "11-3": ["", "", ""],
    "12-1": ["Escalera del Hirsch", "Entrada Florence Ball", "Back Door de la entrada de Diseño"],
    "12-2": ["Generador/Aire atras de Max Von Buch", "Mesas de Madera backside del comedor, close to Florence Ball"],
    "12-3": ["Atras del Monsegur, back entry", "Cerca de la guardia de la entrada por atras al Monsegur-Hirsch, pared de atras del Hirsch"],
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
