import If from '../../components/If'

export default function condicional2() {
    const numero = 3

    return (
        <div>
            <If teste={numero % 2 === 0 }>
                O numero {numero} é par
            </If>

            <If teste={numero % 2 === 1 }>
                O numero {numero} é ímpar
            </If>
        </div>
    )
}