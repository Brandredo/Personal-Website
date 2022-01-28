import styles from "./css/Tag.module.css";

export default function Tag({ name }) {

    //console.log(name);
    return (
        <span className={styles.tagColor}>
            <span className={styles.tagText}>{name}</span>
        </span>
    )
}



