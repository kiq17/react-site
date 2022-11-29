import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/layouts/header.module.css";

const Header = ({ navItems }) => {
    return (
        <header className={styles.header}>
            <h1>Logo</h1>
            <nav>
                <ul className={styles.menuLista}>
                {navItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/${item.replace(" ", "").toLowerCase()}`} key={index + 1}>{item}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;