import styles from "./header.module.css"

const SearchBar = () => {
    return(
        <>
            <form className={styles.search}>
                <input className={styles.search_bar} type="text" placeholder="Search"></input>
                <button type="submit" className={styles.search_button}>
                    <span className="material-symbols-outlined">search</span>
                </button>
                <button className={styles.mic_button}>
                    <span className="material-symbols-outlined">mic</span>
                </button>
            </form>
        </>
    )
}

export default SearchBar