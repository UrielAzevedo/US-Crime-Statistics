import Styles from './Canvas.module.scss'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

var usData = require('../../public/us-crime-data.json')
var years = []
var burglaryData = []
var value = 0

usData = JSON.parse(usData)

for (var year in usData){
    value = usData[year]
    years.push(year)
    burglaryData.push(value.burglary)  
} 

const labels = years

const data = burglaryData

export const chartData = {
    labels: labels,
    datasets: [{
        label: "burglary cases in the us (per 100 thousand habitants)",
        data: data
    }]
}

export const chartoOption = {
    responsive: true,
    tittle: {
        display: true,
        text: 'us burglary stats'
    }
}

const CanvasBurglaryStatistics = () => {

    return(
        <Line data={chartData} options={chartoOption} id={Styles.canvasContainer}/>
    )
}

export default CanvasBurglaryStatistics