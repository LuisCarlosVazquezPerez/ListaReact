import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'



export default function Tarea({tarea, toggleCompletada, editarTarea, borrarTarea}) {

    const [editandoTarea, setEditandoTarea] = useState(false);
    const [nuevaTarea, setNuevaTarea] = useState(tarea.texto);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        setEditandoTarea(false);
    }

    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon icon={tarea.completada ? faCheckSquare : faSquare} 
            className='lista-tareas__icono lista-tareas__icono-check' 
            onClick={()=> toggleCompletada(tarea.id)}
            />
            <div className='lista-tareas__texto'>
                {editandoTarea ?
                    <form action="" className='formulario-editar-tarea' onSubmit={handleSubmit}>
                        <input type="text"
                            className='formulario-editar-tarea__input'
                            value={nuevaTarea}
                            onChange={(e)=> setNuevaTarea(e.target.value)} //Accedemos al evento . al objetivo . y el valor
                        />
                        <button
                            type='submit'
                            className='formulario-editar-tarea__btn'
                            >

                            <p>Actualizar</p> {/* EL EVENTO ESCUCHADO ES EL HANDLE SUBMIT */}
                        </button>
                    </form>
                    : <p>{tarea.texto}</p>
            }
            </div>
            <div className='lista-tareas__icono lista-tareas__icono-check'>
                <FontAwesomeIcon
                    icon={faEdit}
                    className='lista-tareas__icono lista-tareas__icono-accion' 
                    onClick={() => setEditandoTarea(!editandoTarea)}
                    />
                <FontAwesomeIcon
                    icon={faTimes}
                    className='lista-tareas__icono lista-tareas__icono-accion' 
                    onClick={()=>borrarTarea(tarea.id)}
                    />
            </div>
        </li>
    )
}
