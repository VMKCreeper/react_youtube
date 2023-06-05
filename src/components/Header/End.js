import styles from "./header.module.css"

const End = () => {
    return(
        <div className={styles.end}>
            <button>
                <span className="material-symbols-outlined">video_call</span>
            </button>
            <button>
            <span className="material-symbols-outlined">notifications</span>
            </button>
            <button>Profile</button>
        </div>
    )
}

export default End