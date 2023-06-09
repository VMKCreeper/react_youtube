import styles from "./sidebar.module.css"
import Item from "./Item"

const End = () => {
    return(
        <section className={styles.section}>
            <Item icon="settings" name="Settings"></Item>
            <Item icon="flag" name="Report history"></Item>
            <Item icon="help" name="Help"></Item>
            <Item icon="sms_failed" name="Send feedback"></Item>
        </section>
    )
}

export default End