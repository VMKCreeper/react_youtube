import styles from "./header.module.css"

const Start = ({collapsed, setCollapsed}) => {
    function collapseSidebar(){
        if(collapsed){
            setCollapsed(false)
        } else {
            setCollapsed(true)
        }
    }
    return(
        <div className={styles.start}>
            <a href="#" onClick={collapseSidebar}>
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