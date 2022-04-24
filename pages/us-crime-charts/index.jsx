import * as Charts from '../../components/UsCrimeCharts/index'
import Header from '../../components/PageComponents/Header/Header'
import Styles from './index.module.scss'
import Link from 'next/dist/client/link'

const ChartDisplay = () => {

    return (
        <div className={Styles.PageContainer}>
            <Header/>
            <div className={Styles.GridTamplate}>
                <div className={Styles.ChartContainer}>
                    <Link href='/us-crime-charts/CanvasAgravatedAssaultStatistics'>
                        <div className={Styles.CanvasContainer}><Charts.CanvasAgravatedAssaultStatistics /></div>
                    </Link>
                        <span className={Styles.CanvasTitleContainer}>Agravated Assault</span>
                </div>
                <div className={Styles.ChartContainer}>
                    <Link href='/us-crime-charts/CanvasBurglaryStatistics'>
                        <div className={Styles.CanvasContainer}><Charts.CanvasBurglaryStatistics /></div>
                    </Link>
                    <span className={Styles.CanvasTitleContainer}>Burglary</span>
                </div>
                <div className={Styles.ChartContainer}>
                    <Link href="/us-crime-charts/CanvasForcibleRapeStatistics">
                        <div className={Styles.CanvasContainer}><Charts.CanvasForcibleRapeStatistics /></div>   
                    </Link>
                    <span className={Styles.CanvasTitleContainer}>Forcible Rape</span>
                </div>
                <div className={Styles.ChartContainer}>
                    <Link href="/us-crime-charts/CanvasLarcencyTheftStatistics">
                        <div className={Styles.CanvasContainer}><Charts.CanvasLarcencyTheftStatistics /></div> 
                    </Link>
                    <span className={Styles.CanvasTitleContainer}>Larcency Theft</span>
                </div>
                <div className={Styles.ChartContainer}>
                    <Link href="/us-crime-charts/CanvasMurderStatistics">
                        <div className={Styles.CanvasContainer}><Charts.CanvasMurderStatistics /></div>
                    </Link>
                    <span className={Styles.CanvasTitleContainer}>Murder</span>
                </div>
                <div className={Styles.ChartContainer}>
                    <Link href="/us-crime-charts/CanvasPropertyCrimeStatistics">
                        <div className={Styles.CanvasContainer}><Charts.CanvasPropertyCrimeStatistics /></div>
                    </Link>
                    <span className={Styles.CanvasTitleContainer}>Property Crime</span>
                </div>
                <div className={Styles.ChartContainer}>
                    <Link href="/us-crime-charts/CanvasRoberryStatistics">
                        <div className={Styles.CanvasContainer}><Charts.CanvasRoberryStatistics /></div>
                    </Link>
                    <span className={Styles.CanvasTitleContainer}>Roberry</span>
                </div>
                <div className={Styles.ChartContainer}>
                    <Link href="/us-crime-charts/CanvasVehicleTheftStatistics">
                        <div className={Styles.CanvasContainer}><Charts.CanvasVehicleTheftStatistics /></div>
                    </Link>
                    <span className={Styles.CanvasTitleContainer}>Vehicle Thef</span>
                </div>
                <div className={Styles.ChartContainer}>
                    <Link href="/us-crime-charts/CanvasViolentCrimeStatistics">
                        <div className={Styles.CanvasContainer}><Charts.CanvasViolentCrimeStatistics /></div>
                    </Link>
                    <span className={Styles.CanvasTitleContainer}>Violent Crime</span>
                </div>
            </div> 
        </div>

    )
}

export default ChartDisplay