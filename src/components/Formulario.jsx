
import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const datos = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            console.log('El nombre esta vacio');
            return
        }
    }
    return (
        <div className="container">
            <form className="form-group" onSubmit={datos}>
                <div className="mb-3">

                    <input className="form-control" type="text" placeholder="Introduce el Nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Introduce la edad" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                </div>


                <button className="btn btn-primary" type="submit" >Enviar</button>
            </form>
        </div>
    )
}

export default Formulario
