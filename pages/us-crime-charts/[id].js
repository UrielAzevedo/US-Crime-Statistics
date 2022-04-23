import { useRouter } from 'next/router'
import ChartSelector from '../../components/ChartSelector/ChartSelector'
import Header from '../../components/PageComponents/Header/Header'
import Styles from './id.module.scss'

const ChartDisplayId = () => {

    const router = useRouter()
    const { id } = router.query

    return(
        <div className={Styles.pageContainer}>
            <Header/>
            <ChartSelector id={id}/>
        </div>
    )
}

// export const getStaticPaths = async (context) => {
//     const res = await fetch('http://localhost:3000/api/charts')
//     const charts = await res.json()
    
//     const paths = charts.chartNames.map((chart) => ({
//         params: {id: chart}
//     }))
    
//     return { paths, fallback: false }
// }

// export const getStaticProps = async () => {
//     const res = await fetch('http://localhost:3000/api/charts')
//     const charts = await res.json()

//     return{
//         props: { charts }
//     }
// }

export default ChartDisplayId