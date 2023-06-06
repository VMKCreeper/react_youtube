import styles from "./header.module.css"

const End = () => {
    return(
        <div className={styles.menu_icons}>
            <a href="#">
                <span className="material-symbols-outlined" alt="Upload video">video_call</span>
            </a>
            <a href="#">
                <span className="material-symbols-outlined" alt="Apps">apps</span>
            </a>
            <a href="#">
                <span className="material-symbols-outlined" alt="Notifications">notifications</span>
            </a>
            <a href="#">
                <img className={styles.profile_icon}src="http://unsplash.it/36/36?gravity=ce" alt="Your channel"></img>
            </a>
        </div>
    )
}

export default End