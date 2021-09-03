export default function repeticao1() {

    const listaAprovados = [
        'Kaic',
        'David',
        'Joao',
        'Felipe',
        'Luiz'
    ]

    function renderizarLista(){
        return listaAprovados.map((nome, index)=> <li key={ index }>{ nome }</li>)
    }


    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}

    // function renderizarLista() {
    //     const itens = [];

    //     for (let i = 0; i < listaAprovados.length; i++){
    //         itens.push(<li key={i}>{listaAprovados[i]}</li>)
    //     }
    //     return itens;
    // }
