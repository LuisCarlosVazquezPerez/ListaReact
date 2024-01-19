import React from 'react'
import Tarea from './Tarea'

export default function ListaTareas({ tareas, setTareas, mostrarCompletadas }) {

    const toggleCompletada = (id) => { //HACE CLICK AL ID DE LA TAREA
        setTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                //!RETURN Valor que se devolverá para cada elemento
                return { ...tarea, completada: !tarea.completada } //Invertimos el valor completada 
            }

            return tarea; //Si no hacemos check en la tarea simplemente las mostramos 
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        setTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                //!RETURN Valor que se devolverá para cada elemento
                return { ...tarea, texto: nuevoTexto } //Invertimos el valor completada 
            }

            return tarea; //Si no hacemos check en la tarea simplemente las mostramos 
        }));
    }

    const borrarTarea = (id) => { //HACE CLICK AL ID DE LA TAREA
        setTareas(tareas.filter((tarea) => { //Filter: permite si una tarea es verdadera esa tarea no nos la devolvera en el array final.
            if (tarea.id !== id) {
                //!RETURN Valor que se devolverá para cada elemento
                return tarea; //?EL ARREGLO FINAL TENDRA TODAS LAS TAREAS EXCENTO EL ELIMINADO
            }

            return;
        }));
    }

    //* J S X

    return (
        <>
            <ul className='lista-tareas'>
                {
                    tareas.length > 0
                        ?
                        tareas.map((tarea) => {
                            //!RETURN Valor que se devolverá para cada elemento
                            if (mostrarCompletadas) {
                                return <Tarea
                                    key={tarea.id}
                                    tarea={tarea} //!PROP
                                    toggleCompletada={toggleCompletada} //!PROP
                                    editarTarea={editarTarea} //!PROP
                                    borrarTarea={borrarTarea}//!PROP
                                />
                                //* SI LA TAREA NO ESTA COMPLETADA , LA DEVOLVEMOS
                            } else if (!tarea.completada) {
                                return <Tarea
                                    key={tarea.id}
                                    tarea={tarea} //!PROP
                                    toggleCompletada={toggleCompletada} //!PROP
                                    editarTarea={editarTarea} //!PROP
                                    borrarTarea={borrarTarea}//!PROP
                                />
                            }

                            //* SI LA TAREA YA ESTA COMPLETADA NO LA DEVOLVEMOS
                            return;
                        })
                        :
                        <div className='lista-tareas__mensaje'>
                            <p>No hay tareas agregadas</p>
                        </div>
                }
            </ul>
        </>
    )
}
