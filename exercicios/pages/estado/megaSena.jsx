import { useState } from "react"
import { mega } from '../../functions/mega'
import NumeroDisplay from "../../components/NumeroDisplay"

export default function megaSena() {

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState(mega(qtde))


    function renderNumeros() {
        return numeros.map(n => <NumeroDisplay key={n} numero={n}/>)
    }

    return (
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <h1>Mega Sena</h1>
            <div style={{ display: 'flex', justifyContent: 'center',flexWrap: "wrap"}}>
                {renderNumeros()}
            </div>

            <div>
                <input type="number" min="6" max="20" value={qtde} onChange={event => setQtde(event.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>
                   Gerar Aposta 
                </button>
            </div>
        </div>
    )
}