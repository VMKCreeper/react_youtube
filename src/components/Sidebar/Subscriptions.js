import styles from "./sidebar.module.css"
import Item from "./Item"

const Subscriptions = () => {
    return(
        <section className={styles.section}>
            <h4>Subscriptions</h4>
            <Item channel="https://yt3.ggpht.com/22KnC03iigBpBtrN90YC6SHS5GooWJFBEmNldwU1zBqM3BWJMwiSe0r9OZstZHYHc3kCMf5f=s600-c-k-c0x00ffffff-no-rj-rp-mo" name="VMKCreeper"></Item>
        </section>
    )
}

export default Subscriptions