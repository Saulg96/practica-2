import '../styles/User.css';
import React, {useState} from 'react';

function User (props) {
    const [increm, setIncrem] = useState(0);
    const items = [
        {fruta: "manzana", cantidad: 2},
        {fruta: "pera", cantidad: 12},
        {fruta: "piña", cantidad: 5}]

    return (
        <>
        <div className="container-1">
            <div>vistas: {increm}</div>
            <button onClick={() => {setIncrem(increm+1)}}>
                Aumentar visitas
            </button>
            <h1 className="title-number">User number: {props.number}</h1>
            <h2 className="title-name">name: {props.name}</h2>
            {props.clasify 
                ? <div className='clasified'>Clasificado...!!! :)</div>
                : <div className='unclasified'>No Clasifica...!!! :(</div>
            }
            <br />
            <ul>
                {items.map((item,id) => {
                    return (
                        <div key={id}>fruit: {item.fruta} - amount: {item.cantidad}</div>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default User;