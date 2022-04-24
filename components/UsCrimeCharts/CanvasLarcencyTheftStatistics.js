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
var larcencyTheftData = []
var value = 0

usData = JSON.parse(usData)

for (var year in usData){
    value = usData[year]
    years.push(year)
    larcencyTheftData.push(value.larcency_theft)  
} 

const labels = years

const data = larcencyTheftData

export const chartData = {
    labels: labels,
    datasets: [{
        label: "larcency theft cases in the us (per 100 thousand habitants)",
        data: data
    }]
}

export const chartoOption = {
    responsive: true,
    tittle: {
        display: true,
        text: 'us larcency theft stats'
    }
}

const CanvasLarcencyTheft = () => {

    return(
        <Line data={chartData} options={chartoOption} id={Styles.CanvasContainer}/>
    )
}

export default CanvasLarcencyTheft