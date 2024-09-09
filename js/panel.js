document.getElementById('rocksubmitButton').addEventListener('click', function() {
    const rockpassword = document.getElementById('rockpasswordInput').value;
    const correctRockpassword = 'Petit Green'; // Set your desired password here
    const message = document.getElementById('rockhiddenMessage');

    if (rockpassword === correctRockpassword) {
        message.style.display = 'block';
    } else {
        alert('Incorrect rock password, please try again.');
    }
});
