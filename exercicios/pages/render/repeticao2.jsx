import productList from "../../data/productList"

export default function repeticao2() {

    
    const withBorder = {
        border: "1px solid #000",
    }


    function renderRows() {
        return productList.map(product => {
            return (
                <tr key={product.id}>
                    <td style={withBorder}>{product.id}</td>
                    <td style={withBorder}>{product.name}</td>
                    <td style={withBorder}>{product.price}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={withBorder}>
                <thead>
                    <tr>
                        <th style={withBorder}>Código</th>
                        <th style={withBorder}>Nome</th>
                        <th style={withBorder}>Preco</th>
                    </tr>
                </thead>

                <tbody>
                    {renderRows()}
                </tbody>
           </table>
        </div>
    )
}