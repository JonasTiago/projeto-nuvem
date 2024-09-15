document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');

    

    if (username === 'admin' && password === 'password') {
        alert('Login successful');
    } else {
        errorMessage.textContent = 'Usuario ou senha invalida!';
    }
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');

    if (username && email && password) {
        alert('Registration successful');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'All fields are required';
    }
});

window.addEventListener('load', () => {
    //...
})