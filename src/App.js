import React, {Fragment, useState, useEffect} from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";




function App() {

  // Agregando el LocalStorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas')); // JSON.parse extrae los valores para poder almacenarlos
  if(!citasIniciales) { // En caso que no existan citas, entonces retorna ...
    citasIniciales = [] // UN ARREGLO VACÍO
  };

  // Arreglo de citas

  const [citas, guardarCitas] = useState(citasIniciales);

  // Hook de useEffect, utilizado para realizar operaciones cuando el state cambia

  useEffect( () => { // Funciona para modificar los States
    if(citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas)); // el JSON.stringify es para que cree una cadena de texto - El (citas) es por quien almacenará
    }else {
      localStorage.setItem("citas",JSON.stringify([])); // si no encuentra nada agregado, entonces retona un arreglo vacío
    }
  }); // [citas] es el State que se usará para la modificación

  // Función que tome las citas actuales y agregue la nueva

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // Funcion que elimina una cita por su ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter( cita => cita.id !== id)
    guardarCitas(nuevasCitas); 
  }

  // Mensaje condicional
  const mensajeCondicional = citas.length === 0 ? "No tienes citas" : "Administra tus citas" 

  
  
  return (

    <Fragment>
      <h1>
        Administrador de Pacientes

      </h1>
   
      <div className="container">

        <div className="row">

          <div className="one-half column">

          <Formulario
            crearCita={crearCita}
          />

          </div>

          <div className="one-half column">

          <h2>{mensajeCondicional}</h2>

          {citas.map(cita => (
            
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />

          ))}

          </div>

        </div>
      </div>    
      
      

   
    </Fragment>

   
  );
}

export default App;
