import styles from './Header.module.css'
import imgLogo from '../assets/LogosReact.svg'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={imgLogo} alt="React logo header" />
            <strong>RPV react posts</strong>
        </header>
    )
}