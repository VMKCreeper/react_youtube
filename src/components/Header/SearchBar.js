import styles from "./header.module.css"

const SearchBar = () => {
    return(
        <div className={styles.search}>
            <form>
                <input className={styles.searchBar} type="text" placeholder="Search"></input>
                <button type="submit">
                    <span className="material-symbols-outlined">search</span>
                </button>
            </form>
            <button>
                <span className="material-symbols-outlined">mic</span>
            </button>
        </div>
    )
}

export default SearchBar