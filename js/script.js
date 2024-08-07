document.addEventListener('DOMContentLoaded', () => {
    // Define the passwords for each panel
    const passwords = [
        'juanchi', 
        'topa', 
        'sV2B4LzY', 
        'N9cQ1dR5', 
        'mH7Tp6Wx',
        'Jk3Ue8Fz', 
        'R4bW0vH1', 
        'xS7Lm9Qp', 
        'C5zJ2yV8', 
        'F3dP9rN4',
        'W7tL0mX6', 
        'E1cQ8Zr3'
    ];

    // Function to check the password
    function checkPassword(panelNumber) {
        // Get the entered password and the correct password
        const enteredPassword = document.getElementById(`password${panelNumber}`).value;
        const correctPassword = passwords[panelNumber - 1]; // panelNumber is 1-based

        if (enteredPassword === correctPassword) {
            // Unlock the panel
            const panel = document.getElementById(`panel${panelNumber}`);
            panel.classList.remove('expecting', 'shake', 'wrong');
            panel.classList.add('unlocked');
            document.getElementById(`clue${panelNumber}`).style.display = 'block';

            // Disable the current panel's input and enable the next panel's input
            if (panelNumber < passwords.length) {
                document.getElementById(`password${panelNumber + 1}`).removeAttribute('disabled');
                const nextPanel = document.getElementById(`panel${panelNumber + 1}`);
                nextPanel.classList.add('expecting');
            }
        } else {
            // Show the wrong password animation
            const panel = document.getElementById(`panel${panelNumber}`);
            panel.classList.add('shake', 'wrong');
            setTimeout(() => {
                panel.classList.remove('shake', 'wrong');
            }, 1000);
        }
    }

    // Initially disable all inputs except for the first one
    for (let i = 2; i <= passwords.length; i++) {
        document.getElementById(`password${i}`).setAttribute('disabled', 'true');
    }

    // Make checkPassword function available globally
    window.checkPassword = checkPassword;
});
