import styles from "./sidebar.module.css"

const Item = ({name, icon, channel})=> {
    function subscriptions(){
        if(icon){
            return(
                <span id={styles.icon} class="material-symbols-outlined">{icon}</span>
            )
        }
        else if(name){
            return <img className={styles.logo} src={channel} alt="Channel"></img>
        }
    }
    return(
        <div className={styles.item}>
            {subscriptions()}
            {name}
        </div>
    )
}

export default Item