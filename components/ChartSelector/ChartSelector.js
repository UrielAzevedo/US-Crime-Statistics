import Styles from './ChartSelector.module.scss'
import * as Charts from '../UsCrimeCharts/index'

const ChartSelector = (props) => {

    switch (props.id){
        case 'CanvasAgravatedAssaultStatistics': 
            return( <div className={Styles.DisplayContainer}> <Charts.CanvasAgravatedAssaultStatistics/> </div> )
        case 'CanvasBurglaryStatistics':
            return( <div className={Styles.DisplayContainer}> <Charts.CanvasBurglaryStatistics/> </div> )
        case 'CanvasForcibleRapeStatistics':
            return( <div className={Styles.DisplayContainer}> <Charts.CanvasForcibleRapeStatistics/> </div> )
        case 'CanvasLarcencyTheftStatistics': 
            return( <div className={Styles.DisplayContainer}> <Charts.CanvasLarcencyTheftStatistics/> </div> )
        case 'CanvasMurderStatistics':
            return( <div className={Styles.DisplayContainer}> <Charts.CanvasMurderStatistics/> </div> )
        case 'CanvasPropertyCrimeStatistics':
            return( <div className={Styles.DisplayContainer}> <Charts.CanvasPropertyCrimeStatistics/> </div> )
        case 'CanvasRoberryStatistics': 
            return( <div className={Styles.displayContainer}> <Charts.CanvasRoberryStatistics/> </div> )
        case 'CanvasVehicleTheftStatistics':
            return( <div className={Styles.DisplayContainer}> <Charts.CanvasVehicleTheftStatistics/> </div> )
        case 'CanvasViolentCrimeStatistics':
            return( <div className={Styles.DisplayContainer}> <Charts.CanvasViolentCrimeStatistics/> </div> ) 
        default:
            return(<div/>)
    }
}

export default ChartSelector
