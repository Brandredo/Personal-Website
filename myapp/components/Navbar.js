import styles from "../components/css/Navbar.module.css";
import react from "react";
import { useState, useEffect } from "react";

function Navbar() {

    const [navColor, setNavColor] = useState(false);

    const changeNavColor = () => {

        //console.log(window.scrollY);

        if (window.scrollY > 0) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }

    }

    const scrollTo = (id) => {

        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

    }

    useEffect(() => {
        document.addEventListener("scroll", changeNavColor);
    });

    return (
        <div className="navigation-con w-full">
            <ul className={navColor ? styles.navlist2 : styles.navlist1}>
                <li className={navColor ? styles.item1 : styles.item2}>
                    <a onClick={() => scrollTo("homeid")}>Home</a>
                </li>
                <li className={navColor ? styles.item1 : styles.item2}>
                    <a onClick={() => scrollTo("aboutmeid")}>About</a>
                </li>
                <li className={navColor ? styles.item1 : styles.item2}>
                    <a onClick={() => scrollTo("projectsid")}>Projects</a>
                </li>
                <li className={navColor ? styles.item1 : styles.item2}>
                    <a onClick={() => scrollTo("contactid")}>Contact</a>
                </li>
            </ul>
        </div >
    );
}

export default Navbar;
