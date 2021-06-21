import React, { useState } from 'react'
import uniqid from 'uniqid';
const ListadoNombres = () => {
    const [nombre, setNombre] = useState("");
    const [listarNombres, setListarNombres] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            setError('El campo nombre esta vacio')
            return
        }
        const nuevoNombre = {
            id: uniqid(),
            nombre
        }
        setListarNombres([...listarNombres, nuevoNombre])
        setNombre('')
        setError(null)
    }

    const deleteNombre = (id) => {
        const nuevoArray = listarNombres.filter(item => item.id !== id)
        setListarNombres(nuevoArray)
    }

    const editar = (item) => {
        setModoEdicion(true)
        setNombre(item.nombre)
        setId(item.id)
    }

    const editarNombre = (e) => {
        e.preventDefault();
        const NuevoArray = listarNombres.map(item => item.id === id ? { id, nombre } : item)
        setListarNombres(NuevoArray)
        setModoEdicion(false)
        setNombre('')
    }
    return (
        <div>
            <h2>Aplicación de Crud</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de Nombre</h2>
                    <ul className="list-group">
                        {
                            listarNombres.map((dato) => (
                                <li key={dato.id} className="list-group-item" >
                                    {dato.nombre}
                                    <button className="btn btn-danger float-end" onClick={() => { deleteNombre(dato.id) }}>
                                        Eliminar
                                    </button>
                                    <button className="btn btn-info float-end" onClick={() => { editar(dato) }}>
                                        Editar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="col">
                    <h2>Formulario </h2>
                    <form className="form-group" onSubmit={modoEdicion ? editarNombre : addNombre} >
                        <div className="mb-3">
                            <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" placeholder="Ingrese el Nombre" />
                            {error != null ? (<div className="alert alert-danger">{error} </div>) : (<div></div>)}
                        </div>

                        < input type="submit" className="btn btn-primary btn-block" value={modoEdicion ? 'Editar' : 'Crear'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ListadoNombres
