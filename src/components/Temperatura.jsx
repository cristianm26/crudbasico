import { useState } from 'react'

const Temperatura = () => {
    const [temperatura, setTemperatura] = useState(19);

    const subir = () => {
        setTemperatura(temperatura + 1)
    }
    const bajar = () => {
        setTemperatura(temperatura - 1)
    }
    return (
        <div className="container">
            <h2>La temperatura es: {temperatura} </h2>
            <p>
                {
                    temperatura > 21 ? 'Hace Calor ' : 'Hace frio'
                }
            </p>
            <button className="btn btn-primary btn-block" onClick={subir}>Aumentar Temperatura</button>
            <button className="btn btn-danger btn-block m-2" onClick={bajar}>Disminuir Temperatura</button>
        </div>
    )
}

export default Temperatura
