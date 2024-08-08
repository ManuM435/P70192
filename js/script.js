document.addEventListener('DOMContentLoaded', () => {
    // Define the passwords for each panel
    const passwords = [
        'patito',
        'Zt6Xw8Gf',
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
        const enteredPassword = document.getElementById(`password${panelNumber}`).value;
        const correctPassword = passwords[panelNumber - 1]; // panelNumber is 1-based

        if (enteredPassword.toLowerCase() === correctPassword.toLowerCase()) {
            // Unlock the panel
            const panel = document.getElementById(`panel${panelNumber}`);
            panel.classList.remove('expecting', 'shake');
            panel.classList.add('unlocked');
            document.getElementById(`clue${panelNumber}`).style.display = 'block';
            localStorage.setItem(`panel${panelNumber}`, 'unlocked');

            // Disable the current panel's input and enable the next panel's input
            if (panelNumber < passwords.length) {
                document.getElementById(`password${panelNumber}`).setAttribute('disabled', 'true');
                document.getElementById(`panel${panelNumber + 1}`).classList.add('expecting');
                document.getElementById(`password${panelNumber + 1}`).removeAttribute('disabled');
                localStorage.setItem(`panel${panelNumber + 1}`, 'expecting');
            }
        } else {
            // Show the shake animation for wrong password
            const panel = document.getElementById(`panel${panelNumber}`);
            panel.classList.add('shake');
            setTimeout(() => {
                panel.classList.remove('shake');
            }, 1000);
        }
    }

    // Initialize panel states from localStorage
    for (let i = 1; i <= passwords.length; i++) {
        const panelState = localStorage.getItem(`panel${i}`);
        const panel = document.getElementById(`panel${i}`);

        if (panelState === 'unlocked') {
            panel.classList.remove('expecting');
            panel.classList.add('unlocked');
            document.getElementById(`clue${i}`).style.display = 'block';
            document.getElementById(`password${i}`).setAttribute('disabled', 'true');
        } else if (panelState === 'expecting') {
            panel.classList.add('expecting');
            document.getElementById(`password${i}`).removeAttribute('disabled');
        } else {
            document.getElementById(`password${i}`).setAttribute('disabled', 'true');
        }
    }

    // Enable the first panel if no panels are unlocked or expecting
    if (!localStorage.getItem('panel1')) {
        document.getElementById('panel1').classList.add('expecting');
        document.getElementById('password1').removeAttribute('disabled');
    }

    // Make checkPassword function available globally
    window.checkPassword = checkPassword;
});
