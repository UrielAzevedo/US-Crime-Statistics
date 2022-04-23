const fs = require('fs')

export default function handler(req, res) {
    const fileNames = fs.readdirSync('components/UsCrimeCharts')
    var charts = []

    fileNames.forEach((file) => {
        const isIndex = (file !== 'index.js' ? false : true)
        if (!isIndex) charts.push(file.substring(file[0], file.lastIndexOf('.')))
    })
    res.status(200).json({ chartNames: charts })
}
  