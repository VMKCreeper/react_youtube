import Item from "./Item"
import styles from "./sidebar.module.css"

const Start = () => {
    return(
        <section className={styles.section}>
            <Item icon="home" name="Home"></Item>
            <Item icon="theaters" name="Shorts"></Item>
            <Item icon="subscriptions" name="Subscriptions"></Item>
        </section>
    )
}

export default Start