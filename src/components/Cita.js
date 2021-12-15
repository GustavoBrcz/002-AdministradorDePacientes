import PropTypes from "prop-types";

const Cita = ({cita, eliminarCita}) => {

    
    return (  
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span> </p>
            <p>Propietario: <span>{cita.propietario}</span> </p>
            <p>Fecha: <span>{cita.fecha}</span> </p>
            <p>Hora: <span>{cita.hora}</span> </p>
            <p>Telefono: <span>{cita.telefono}</span> </p>
            <p>Síntomas: <span>{cita.sintomas}</span> </p>

            <button
                className="button eliminar u-full-width"
                onClick={ () => eliminarCita(cita.id) }
                >
                
            Eliminar Cita &times;</button>
        </div>
    );
}

Cita.protoType = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.isRequired
}
 
export default Cita;