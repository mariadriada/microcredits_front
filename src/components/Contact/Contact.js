import React, { useState } from 'react'
import Layout from "../Layout"

export default function Contact(){
    // Define state
    const [ name, setName ] = useState("Raul")
    const [ lastname, setLastName ] = useState("Giraldo")

  /*  Define state like an object
    const [state, setState] = useState({
        name: "raul", 
        lastname: "giraldo"
    })

    const click = (e, item) => {
        console.log(e.target.value, item)
        setState({
            ...state,
            [item]: e.target.value
        })
    }
    const clickLastname = (e) => {
        console.log(e.target.value)
        setState({
            apellido: e.target.value
        })
    }*/
    

    return(
        <Layout>
            <div>
                Escriba un nombre
                <input type="text" onKeyUp={(e)=>setName(e.target.value)} />
                Escriba un apellido
                <input type="text" onKeyUp={(e)=>setLastName(e.target.value)} />
                
            </div>
            <div>
                <h1>Nombre: {name}</h1>
                <h1>Apellido: {lastname}</h1>
               
            </div>
        </Layout>
    )
}
