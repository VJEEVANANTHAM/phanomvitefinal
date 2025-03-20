import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import hamburger from '../../assets/hamburger.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from './Dropdown';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <img src={logo} alt='logo' className={styles.logo} />
            <img
                src={hamburger}
                alt="menu"
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
            />

            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                <li className={styles.dropdown}>
                    <a href="#">
                        Service
                        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px', fontSize: '90%' }} />
                    </a>
                    <ul className={styles.dropdownMenu}>
                        <Dropdown />
                    </ul>
                </li>
                <li className={styles.dropdown}>
                    <a href="#">
                        Hire Indian Talent
                        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px', fontSize: '90%' }} />
                    </a>
                </li>
                <li><a href="#">Our Portfolio</a></li>
                <li><a href="#">Case Study</a></li>
                <li><button className={styles.btn}>Book an Appointment</button></li>
            </ul>
        </nav>
    );
}