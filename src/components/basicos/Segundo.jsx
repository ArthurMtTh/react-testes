import React from "react"

export default function Segundo(props) {
    const status = props.registro >= 9702 ? "Wanted" : "Common" 
    
    return(
        <div>
            <p>
                Your register is: {props.registro};
                Age: {props.idade}; 
                Social name: {props.nome}; 
                Situation: {status}
            </p>
        </div>
    )
}
