export default function Lista() {
    return (
        <div>
            {gerarLista(10)}
        </div>
    )
}

function gerarLista(quantidade) {
    const lista = []
    for (var i = 0; i <= quantidade; i++) {
        lista.push(<span>{ i },</span>)
    }
    return lista
}

