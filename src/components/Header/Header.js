import SearchBar from "./SearchBar"
import Start from "./Start"
import End from "./End"
import styles from "./header.module.css"

const Header = ({collapsed, setCollapsed}) => {
    return(
        <div className={styles.header}>
            <Start collapsed={collapsed} setCollapsed={setCollapsed}></Start>
            <SearchBar></SearchBar>
            <End></End>
        </div>
    )
}

export default Header