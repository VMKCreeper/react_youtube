import styles from "./sidebar.module.css"
import Item from "./Item"

const Playlists = () => {
    return(
        <section className={styles.section}>
            <Item icon="video_library" name="Library"></Item>
            <Item icon="history" name="History"></Item>
            <Item icon="smart_display" name="Your videos"></Item>
            <Item icon="schedule" name="Watch later"></Item>
            <Item icon="playlist_play" name="Playlist"></Item>
            <Item icon="expand_more" name="Show more"></Item>
        </section>
    )
}

export default Playlists