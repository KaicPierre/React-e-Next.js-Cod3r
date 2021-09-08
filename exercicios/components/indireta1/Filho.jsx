export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <button onClick={() => props.funcao("Passando mensagem do filho para o pai")}>Falar com o Pai</button>
        </div>
    )
}