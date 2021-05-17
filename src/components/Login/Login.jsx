import React from 'react';

const Login = () => {
    return(
        <div className="login">
            <div className="login-title">Iniciar Sesión</div>

            <form action="" className="login-form">
                <input type="email" placeholder="Email" className="login-input-email"/>
                <input type="password" placeholder="Password" className="login-input-password"/>
                <input type="button" value="Entrar" className="login-button-login"/>
                <input type="button" value="Registrarse" className="login-button-register"/>
            </form>
        </div>
    );
};

export default Login;