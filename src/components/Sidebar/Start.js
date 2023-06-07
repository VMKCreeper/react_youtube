import Item from "./Item"
import styles from "./sidebar.module.css"

const Start = () => {
    return(
        <>
            <section className={styles.section}>
                <Item icon="home" name="Home"></Item>
                <Item icon="theaters" name="Shorts"></Item>
                <Item icon="subscriptions" name="Subscriptions"></Item>
            </section>
            <section className={styles.section}>
                <Item icon="video_library" name="Library"></Item>
                <Item icon="history" name="History"></Item>
                <Item icon="smart_display" name="Your videos"></Item>
                <Item icon="schedule" name="Watch later"></Item>
                <Item icon="playlist_play" name="Playlist"></Item>
            </section>
        </>
    )
}

export default Start