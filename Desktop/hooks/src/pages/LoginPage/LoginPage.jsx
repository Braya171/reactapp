import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
function Home (){

    return(
        <div>
            <h1>HOME</h1>
            <Link to="/register">
                <button>IR A REGISTRO</button>
            </Link>
            <Link to="/forgot">
                <button>OLVIDE MI CONTRASEÑA</button>
            </Link>

            <div class="form-card w-50 mx-auto">
        <h3 class="text-center mb-4">Iniciar Sesión</h3>
        <form id="loginForm">
            <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="email" placeholder="tucorreo@ejemplo.com" required/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <div class="input-group">
                    <input type="password" class="form-control" id="password" placeholder="Contraseña" required/>
                    <button class="btn btn-outline-secondary" type="button" id="togglePassword">
                        <i class="bi bi-eye"></i>
                    </button>
                </div>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Entrar</button>
            </div>
        </form>
        <div class="text-center mt-3">
            <a href="../html/registro.html">¿No tienes cuenta? Regístrate</a><br/>
            <a href="../html/recuperar.html">¿Olvidaste tu contraseña?</a>
        </div>
    </div>
        </div>


    );

}
export default Home;