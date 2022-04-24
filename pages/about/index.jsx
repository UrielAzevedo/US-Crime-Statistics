import Styles from './About.module.scss'
import Header from '../../components/PageComponents/Header/Header'

const About = () => {

    return(
        <div className={Styles.PageContainer}>
            <Header/>
            <div className={Styles.InfoContainer}>
                <span className={Styles.TittleContainer}> The Project </span>

                <span> Next JS project meant to be a graph visualization tool for the data presented by the U.S Disaster Center: </span>
                
                <p><a href="https://www.disastercenter.com/crime/uscrime.htm" className={Styles.Link}> https://www.disastercenter.com/crime/uscrime.htm </a></p>

                <br/>
                <br/>
                
                <span className={Styles.SubTittleContainer}> Data Extraction </span>

                <p className={Styles.Info}> Due to the lack of an api for data fetching, the statistics had to be extracted directly from the website disclosed above. For that matter, a python webscrapper script was implemented: </p>
                <p><a href="https://github.com/UrielAzevedo/us-crime-data-webscrap-script" className={Styles.Link}> https://github.com/UrielAzevedo/us-crime-data-webscrap-script </a></p>
            </div>
        </div>
    )
}

export default About