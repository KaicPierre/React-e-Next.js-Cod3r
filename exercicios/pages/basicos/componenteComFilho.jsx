import Item from '../../components/Item'
import Lista from '../../components/Lista'

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item Teste"></Item>
                <Item conteudo="Item Teste 2"></Item>
                <Item conteudo="Item Teste 3"></Item>
            </Lista>
        </div>
    )
}