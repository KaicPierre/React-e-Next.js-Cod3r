import {useEffect, useState} from 'react'

export default function questao() {

    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1')
        .then(resp => resp.json())
        .then(setQuestao)
    }, [])


    function renderizarRespostas() {
        if (questao) {
            return questao.respostas.map((res, i) => {
                return <li key={i}>{res}</li>
            })
        } else {
            return false
        }
    }
    
    return (
        <div>
            Questao
            <div>
                <span>{questao?.enunciado}</span>
            </div>
            <ul>
                {renderizarRespostas()}
           </ul>
        </div>
    )
}