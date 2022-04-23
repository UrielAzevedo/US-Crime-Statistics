import Styles from './Header.module.scss'
import Link from 'next/dist/client/link'

const Header = () => {
    return(
        <div className={Styles.MainContainer}>
            <nav className={Styles.LinkContainer}>
                <Link href ='/'>Home</Link> 
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href ='/us-crime-charts'>Grid View</Link> 
            </nav>
            <nav className={Styles.LinkContainer}>
                <Link href ='/about'>About</Link> 
            </nav>
        </div>
    )
}

export default Header