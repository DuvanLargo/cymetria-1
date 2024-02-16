import React from 'react';    
import '../estilos/Perfil.css';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img 
            className='imagen-perfil'
            src={require(`../imagenes/${props.imagen}.png`)}/>
            <div className='contenedor-texto-perfil'>
            <p className='pais-perfil'>
                {props.nombre} en {props.pais}
            </p>               
            <p className='cargo-perfil'>
                {props.cargo} en {props.empresa}
            </p>
            <p className='resena-perfil'>
                {props.resena}
            </p>
            </div>
        </div>
    )
};

export default Perfil;