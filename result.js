document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'RafJef' && password === 'RafJef1') {
        window.location.href = 'MENU.html';
    } else {
        alert('Invalid username or password.');
    }
});
