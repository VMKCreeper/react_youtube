import Video from "./Video"
import styles from "./videos.module.css"

const VideoSection = () => {
    return(
        <section className={styles.video_section}>
            <h2 className={styles.video_section_title}>
                Special section
                <button className={styles.video_section_button_close}>
                    &times;
                </button>
            </h2>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
        </section>
    )
}

export default VideoSection