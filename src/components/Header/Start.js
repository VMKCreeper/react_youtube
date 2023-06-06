import styles from "./header.module.css"

const Start = () => {
    return(
        <div className={styles.start}>
            <a href="#">
                <span className="material-symbols-outlined">menu</span>
            </a>
            <a href="#">
                <img 
                    className={styles.logo}
                    src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.svg"
                    alt="Youtube logo"
                ></img>
            </a>
        </div>
    )
}

export default Start