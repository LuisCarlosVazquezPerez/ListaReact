import React, { useState, useEffect } from 'react'
import Header from './componentes/Header'
import './App.css'
import FormularioTareas from './componentes/FormularioTareas'
import ListaTareas from './componentes/ListaTareas';


export default function App() {
  // Obtenemos las tareas guardadas de localstorage.
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : [];
  
  const [tareas, setTareas] = useState(tareasGuardadas);

  useEffect(() => {
    //codigo cada vez que hay un cambio
    localStorage.setItem('tareas', JSON.stringify(tareas)); //JSON.stringify lo transforma a cadena de texto en formato json.
  }, [tareas] /*El codigo solo se ejecuta una vez y cuando las tareas cambien */);

  //!Accedemos a LS y comprobamos si mostrarCompletadas es null

  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas);
 
  useEffect(() => {
    //codigo cada vez que hay un cambio
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString()); //JSON.stringify lo transforma a cadena de texto en formato json.
  }, [mostrarCompletadas] /*El codigo solo se ejecuta una vez y cuando las tareas cambien */);

  return (
    <>
      <div className='contenedor'>
        <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas} />

        <FormularioTareas tareas={tareas} setTareas={setTareas} />

        <ListaTareas
          tareas={tareas}  //PROP
          setTareas={setTareas} //PROP
          mostrarCompletadas={mostrarCompletadas}
        />
      </div>
    </>
  )
}
