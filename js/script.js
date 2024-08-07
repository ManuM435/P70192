document.addEventListener('DOMContentLoaded', () => {
    // Define the passwords for each panel
    const passwords = [
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi',
        'juanchi'
    ];

    // Function to check the password
    function checkPassword(panelNumber) {
        // Get the entered password and the correct password
        const enteredPassword = document.getElementById(`password${panelNumber}`).value;
        const correctPassword = passwords[panelNumber - 1]; // panelNumber is 1-based

        // Get the panel and error message element
        const panel = document.getElementById(`panel${panelNumber}`);
        const errorMessage = document.getElementById(`error${panelNumber}`);

        if (enteredPassword === correctPassword) {
            // Unlock the panel
            panel.classList.remove('expecting');
            panel.classList.add('unlocked');
            document.getElementById(`clue${panelNumber}`).style.display = 'block';

            // Disable the current panel's input and enable the next panel's input
            if (panelNumber < passwords.length) {
                document.getElementById(`password${panelNumber + 1}`).removeAttribute('disabled');
            }

            // Remove error class if it was previously added
            panel.classList.remove('error');
        } else {
            // Apply error class to panel for shaking effect
            panel.classList.add('error');

            // Remove the error class after animation ends
            setTimeout(() => {
                panel.classList.remove('error');
            }, 1000); // Duration of the shaking animation
        }
    }

    // Initially disable all inputs except for the first one
    for (let i = 2; i <= passwords.length; i++) {
        document.getElementById(`password${i}`).setAttribute('disabled', 'true');
    }

    // Make checkPassword function available globally
    window.checkPassword = checkPassword;
});
