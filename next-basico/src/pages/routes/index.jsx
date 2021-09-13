import Link from 'next/link'
import router from 'next/router'

export default function routes() {
    return (
        <div>
            <Link href="/routes/12345/buscar">
                Teste
            </Link>

            <div style={{display: 'flex', flexDirection:"column"}}>
                <button onClick={() => router.push('routes/123456/buscar')}>Buscar</button>
            </div>
        </div>
        
    )
}