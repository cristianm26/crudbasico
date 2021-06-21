import { useState } from 'react'

const Contador = () => {
    const [numero, setNumero] = useState(0);
    const aumentar = () => {
        setNumero(numero + 1)
    }
    const disminuir = () => {
        setNumero(numero - 1)
    }
    return (
        <div>
            <h2>Cantidad del Contador : {numero} </h2>

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

export default Contador
