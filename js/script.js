document.addEventListener('DOMContentLoaded', () => {
    // Example passwords for each panel
    const passwords = ['password1', 'password2', 'password3', 'password4', 'password5', 'password6', 'password7', 'password8', 'password9', 'password10', 'password11', 'password12'];

    function checkPassword(panelNumber) {
        const passwordInput = document.getElementById(`password${panelNumber}`);
        const clue = document.getElementById(`clue${panelNumber}`);
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === passwords[panelNumber - 1]) {
            clue.style.display = 'block';
            passwordInput.value = '';
            document.getElementById(`panel${panelNumber}`).classList.remove('expecting');
            document.getElementById(`panel${panelNumber}`).classList.add('unlocked');

            if (panelNumber < 12) {
                document.getElementById(`panel${panelNumber + 1}`).classList.remove('locked');
                document.getElementById(`panel${panelNumber + 1}`).classList.add('expecting');
            }
        } else {
            alert('Incorrect password. Please try again.');
        }
    }

    window.checkPassword = checkPassword;
});
