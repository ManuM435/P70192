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

    function checkPassword(panelNumber) {
        // Get the entered password and the correct password
        const enteredPassword = document.getElementById(`password${panelNumber}`).value;
        const correctPassword = passwords[panelNumber - 1]; // panelNumber is 1-based
    
        const panel = document.getElementById(`panel${panelNumber}`);
        const errorElement = document.getElementById(`error${panelNumber}`);
    
        if (enteredPassword === correctPassword) {
            // Unlock the panel
            panel.classList.remove('expecting');
            panel.classList.add('unlocked');
            document.getElementById(`clue${panelNumber}`).style.display = 'block';
    
            // Disable the current panel's input and enable the next panel's input
            if (panelNumber < passwords.length) {
                document.getElementById(`password${panelNumber + 1}`).removeAttribute('disabled');
            }
        } else {
            // Show the wrong password message
            errorElement.style.display = 'block';
            
            // Add shake class to panel
            panel.classList.add('shake');
            
            // Remove shake class after animation ends
            setTimeout(() => {
                panel.classList.remove('shake');
                errorElement.style.display = 'none'; // Hide error message after shaking
            }, 500); // Match this with the duration of the shake animation
        }
    }    

    // Initially disable all inputs except for the first one
    for (let i = 2; i <= passwords.length; i++) {
        document.getElementById(`password${i}`).setAttribute('disabled', 'true');
    }

    // Make checkPassword function available globally
    window.checkPassword = checkPassword;
});
