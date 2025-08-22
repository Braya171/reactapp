import  useState  from "./useState";

function useStateContador(){

    const [contador, setContador ] = useState(0);
    function aumentar(){
        setContador(contador + 1);
    }

    function disminuir(){
        setContador(contador - 1 );
    }
    // Etiquetas de HTML
    return(
        <div>
            <h2>Valor del contador = {contador}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <link to="/hooks">
            <button>IR A HOOKS GENERAL</button>
            </link>
        </div>

    );
}

export default useStateContador;