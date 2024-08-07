document.addEventListener('DOMContentLoaded', () => {
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

    function checkPassword(panelNumber) {
        const enteredPassword = document.getElementById(`password${panelNumber}`).value.toLowerCase();
        const correctPassword = passwords[panelNumber - 1].toLowerCase();
        const panel = document.getElementById(`panel${panelNumber}`);

        if (enteredPassword === correctPassword) {
            panel.classList.remove('expecting', 'error');
            panel.classList.add('unlocked');
            document.getElementById(`clue${panelNumber}`).style.display = 'block';

            if (panelNumber < passwords.length) {
                document.getElementById(`password${panelNumber + 1}`).removeAttribute('disabled');
                document.getElementById(`panel${panelNumber + 1}`).classList.add('expecting');
            }
        } else {
            panel.classList.add('error');
            setTimeout(() => panel.classList.remove('error'), 1000); // Remove error class after 1 second
        }
    }

    for (let i = 2; i <= passwords.length; i++) {
        document.getElementById(`password${i}`).setAttribute('disabled', 'true');
    }

    window.checkPassword = checkPassword;
});
