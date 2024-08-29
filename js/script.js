document.addEventListener('DOMContentLoaded', () => {
    // Define the passwords for each panel
    const passwords = [
        'patito',
        'juanchi',
        'roomba1',
        'roomba2',
        'roomba3',
        'This... is Berk. The best kept secret this side of, well, anywhere. Granted, it may not look like much, but this wet heap of rock packs more than a few surprises. Life here is amazing, just not for the faint of heart. See, where most folks enjoy hobbies like whittling or needlepoint, we Berkians prefer a little something we like to call-- DRAGON RACING!',
        'mery',
        'roomba5',
        'roomba6',
        'roomba7',
        'roomba8',
        'roomba9'
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

        // Add Enter key event listener for each password input
        document.getElementById(`password${i}`).addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                checkPassword(i);
            }
        });
    }
        

    // Enable the first panel if no panels are unlocked or expecting
    if (!localStorage.getItem('panel1')) {
        document.getElementById('panel1').classList.add('expecting');
        document.getElementById('password1').removeAttribute('disabled');
    }

    // Make checkPassword function available globally
    window.checkPassword = checkPassword;
});



