import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import styles from "../../Styles/layouts/footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <p>Powered By Meta &copy;</p>
                <ul className={styles.footerList}>
                    <li>{<FaFacebook />}</li>
                    <li>{<FaTwitter />}</li>
                    <li>{<FaLinkedin />}</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;