import { Link } from "react-router-dom";

function Validador(){
    return (
        <div>
            <h1>Password Validator</h1>
            <Link to="/">
            <button>Validator</button>
            </Link>
            <div class="container">
        <h2>Validador de Contraseña</h2>
        <div class="input-group">
            <input type="password" id="password" placeholder="Ingresa tu contraseña" />
            <i class="fas fa-eye toggle-password" id="togglePassword"></i>
        </div>
        <button onclick="validar()">Validar</button>
    </div>
            </div>
)
}