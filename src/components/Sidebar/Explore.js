import styles from "./sidebar.module.css"
import Item from "./Item"

const Explore = () => {
    return(
        <section className={styles.section}>
            <h4>Explore</h4>
            <Item icon="local_fire_department" name="Trending"></Item>
            <Item icon="music_note" name="Music"></Item>
            <Item icon="movie" name="Movies & TV"></Item>
            <Item icon="sports_esports" name="Gaming"></Item>
            <Item icon="news" name="News"></Item>
            <Item icon="trophy" name="Sports"></Item>
            <Item icon="lightbulb" name="Learning"></Item>
            <Item icon="styler" name="Fasion & Beauty"></Item>
        </section>
    )
}

export default Explore