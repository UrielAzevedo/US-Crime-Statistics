import Styles from './index.module.scss'
import Header from '../components/PageComponents/Header/Header'
import StatisticsList from '../components/PageComponents/StatisticsList/StatisticsList'

export default function Home() {
  return (

    <div className={Styles.MainPageContainer}>
      <Header/>
      <h1 className={Styles.Tittle}>Survey On U.S Crime Data</h1>
      <StatisticsList/>
    </div>
  )
}
