document.addEventListener('DOMContentLoaded', () => {
    const passwords = ['password1', 'password2', 'password3', 'password4', 'password5', 'password6', 'password7', 'password8', 'password9', 'password10', 'password11', 'password12'];

    function checkPassword(panelIndex) {
        const passwordInput = document.getElementById(`password${panelIndex}`);
        const errorMessage = document.getElementById(`error${panelIndex}`);
        const clue = document.getElementById(`clue${panelIndex}`);
        
        if (passwordInput.value === passwords[panelIndex - 1]) {
            document.getElementById(`panel${panelIndex}`).classList.remove('expecting');
            document.getElementById(`panel${panelIndex}`).classList.add('unlocked');
            clue.style.display = 'block';
            errorMessage.style.display = 'none';

            if (panelIndex < passwords.length) {
                document.getElementById(`panel${panelIndex + 1}`).classList.add('expecting');
                document.getElementById(`password${panelIndex + 1}`).removeAttribute('disabled');
            }
            passwordInput.disabled = true;
        } else {
            errorMessage.style.display = 'block';
        }
    }

    // Initially disable all inputs except for the first one
    for (let i = 2; i <= passwords.length; i++) {
        document.getElementById(`password${i}`).setAttribute('disabled', 'true');
    }

    // Make checkPassword function available globally
    window.checkPassword = checkPassword;
});
