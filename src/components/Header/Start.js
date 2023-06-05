import styles from "./header.module.css"

const Start = () => {
    return(
        <div className={styles.start}>
            <button>
                <span className="material-symbols-outlined">menu</span>
            </button>
            <img 
                className={styles.img} 
                src="https://betanews.com/wp-content/uploads/2017/08/new-youtube-logo.jpg"
                alt="Youtube logo"
            ></img>
        </div>
    )
}

export default Start