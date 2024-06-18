const loginForm = document.getElementById('login-form');
const dataForm = document.getElementById('data-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lakukan autentikasi di sini (misalnya, dengan AJAX ke server)
    if (email === 'user@example.com' && password === 'password123') {
        loginForm.style.display = 'none';
        dataForm.style.display = 'block';
    } else {
        alert('Email atau password salah!');
    }
});
