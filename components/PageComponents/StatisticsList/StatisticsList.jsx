import Link from "next/link"
import Styles from './StatisticsList.module.scss'

const StaisticsList = () => {


    return(
        <section className={Styles.SectionContainer}>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasAgravatedAssaultStatistics'>Agravated Assault</Link>
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasBurglaryStatistics'>Burglary</Link>
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasForcibleRapeStatistics'>ForcibleRape</Link>
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasLarcencyTheftStatistics'>LarcencyTheft</Link>
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasMurderStatistics'>Murder</Link>
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasPropertyCrimeStatistics'>PropertyCrime</Link>
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasRoberryStatistics'>Roberry</Link>
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasVehicleTheftStatistics'>VehicleTheft</Link>
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href='/us-crime-charts/CanvasViolentCrimeStatistics'>ViolentCrime</Link>
            </nav>
        </section>
    )
}

export default StaisticsList