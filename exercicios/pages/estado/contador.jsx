import { useState } from "react"

export default function contador() {
    const [numero, setNumero] = useState(0)

    function atualizarContador(event) {
        if (event.target.innerHTML == '+') {
            setNumero(numero+1) 
        } else {
            setNumero(numero-1)
        }
    }

    return (
        <div>
            Contador: {numero}
            <div>
                <button  onClick={atualizarContador}>+</button>
                <button onClick={atualizarContador}>-</button>
            </div>
        </div>
    )
}