
import { useState } from 'react'

const Listado = () => {
    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6])
    return (
        <>
            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero}
                    </li>
                ))}

            </ul>
        </>
    )
}

export default Listado
