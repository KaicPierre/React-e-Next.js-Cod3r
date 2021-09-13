import {useRouter} from 'next/router'

export default function buscar() {
    const router = useRouter()
    const param = router.query.id
    
    console.log(+router.query.id)
    return (
        <div>
            {param}
        </div>
    )
}