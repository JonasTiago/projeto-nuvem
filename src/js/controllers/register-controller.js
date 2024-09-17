import { userServices } from '../services/user-service.js';


const formLogin = document.querySelector('[data-login]');
const errorMessage = document.getElementById('error');


formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.querySelector('[data-name]').value;
    const email = e.target.querySelector('[data-email]').value;
    const password = e.target.querySelector('[data-password]').value;
    try {
        const userConfirm = await userServices.register(name, email, password);

        if (userConfirm === 200) {
            window.location.href = './login.html';
        }


    } catch (err) {
        alert("Dados inválidos. Lembre-se, deve-se inserir um email válido e uma senha com um mínimo de 8 dígitos.")
    }
});