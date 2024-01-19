import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function FormularioTareas({ tareas, setTareas }) {
    const [inputTarea, setInputTarea] = useState('');
    const MySwal = withReactContent(Swal)

    const handleInput = (e) => {
        setInputTarea(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

         // Validar que el input no esté vacío antes de agregar la tarea
         if (inputTarea.trim() === '') {
            Swal.fire({
                title: "No lo dejes Vacio",
                text: "Agrega tu tarea",
                icon: "info"
              });
              return;
        }
        
        setTareas(
            [
                ...tareas, //?ESTAS SON LAS TAREAS YA INGRESADAS

                {//?CON ESTO AGREGAMOS LOS VALORES DE LA NUEVA TAREA
                    id: uuidv4(), //Identificador unico
                    texto: inputTarea,
                    completada: false
                } 
            ]
        );
     setInputTarea('')   
    }

    return (
        <div>
            <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
                <input type="text"
                    className='formulario-tareas__input'
                    placeholder='Escribe una tarea'
                    value = {inputTarea}
                    onChange={(e) => handleInput(e)}
                />

                <button
                    type='submit'
                    className='formulario-tareas__btn'
                >
                    <FontAwesomeIcon icon={faPlusSquare}
                        className='formulario-tareas__icono-btn'
                    />
                </button>

            </form>
        </div>
    )
}
