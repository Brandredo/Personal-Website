import styles from "../components/css/Footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaCopyright } from "react-icons/fa";


function Footer() {

    return (


        <footer id="contactid" className={styles.footer}>
            <div className={styles.footercontainer}>
                <ul className={styles.footerlist}>
                    <li className={styles.item}>
                        <a href=""><FaLinkedin /></a>

                    </li>
                    <li className={styles.item}>
                        <a href="https://github.com/Brandredo"><FaGithub /></a>
                    </li>
                    <li className={styles.item}>
                        <a href="mailto: brandon.figueredo@outlook.com"><FaEnvelope /></a>
                    </li>
                </ul>

            </div>

            <div className={styles.endlayout}>
                <p className={styles.border}></p>
                <p className={styles.footertext}>Created by Brandon Figueredo</p>
            </div>

        </footer>



    );

}

export default Footer;