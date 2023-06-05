import VideoSection from "./VideoSection"
import styles from "./videos.module.css"

const Container = () => {
    return(
        <div className={styles.videos}>
            <VideoSection></VideoSection>
            <VideoSection></VideoSection>
        </div>
    )
}

export default Container