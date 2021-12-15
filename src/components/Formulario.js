import React, {Fragment, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import PropTypes from "prop-types";

const Formulario = ({crearCita}) => {

    
    // Crear State de Citas

    const [cita, actualizarCita] = useState ({
        mascota: " ",
        propietario: " ",
        fecha: " ",
        hora: " ",
        telefono: " ",
        sintomas: " "
    });

    // El segundo State que va a indicar que al iniciar no se tienen datos

    const [error, actualizarError] = useState(false)


    // Función que se ejecuta cuando el usuario escribe

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        });
    };

    // Extraer los valores para validarlos

    const {mascota, propietario, fecha, hora, telefono, sintomas} = cita;

    // Cuando el usuario de en "Agregar Cita", aparece el siguiente mensaje

    const submitCita = (e) => {
        e.preventDefault();

    
        // Validar

        if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || telefono.trim() === "" || sintomas.trim() === ""){
            actualizarError(true)

            return; // Siempre se debe agregar para cortar la acción
        };

        // Eliminar mensaje de "Faltan Datos"
        actualizarError(false);

        // Asignar un ID a cada Cita
        cita.id = uuidv4();
        
        // Agregar al State inicial, y agendar la Cita
        crearCita(cita);

        // Reiniciar el Formulario
        actualizarCita({
            mascota: " ",
            propietario: " ",
            fecha: " ",
            hora: " ",
            telefono: " ",
            sintomas: " "
        })
    };
    
    return ( 

        <Fragment>
            <h2>
                Crear Cita
            </h2>

            {error ? <p className="alerta-error">Faltan Datos</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    // value={mascota}
            
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Tu Nombre"
                    onChange={actualizarState}
                    // value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    placeholder="Tu telefono"
                    onChange={actualizarState}
                    value={fecha}
            
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
            
                />

                <label>Télefono</label>
                <input
                    type="number"
                    name="telefono"
                    className="u-full-width"
                    placeholder="Tu Teléfono"
                    onChange={actualizarState}
                    // value={telefono}
            
                />

                <label>Síntomas</label>
                <textarea
                    
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Describe aquí los síntomas" 
                    onChange={actualizarState}
                    // value={sintomas}
                    >
                        
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary">
                    Agregar Cita
                </button>

            </form>


        </Fragment>
    );
}
 
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;