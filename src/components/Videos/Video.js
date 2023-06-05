import styles from "./videos.module.css"

const Video = () => {
    return(
        <article className={styles.container}>
            <a href="#" className={styles.thumbnail} duration="7:54">
                <img className={styles.thumbnail_img} src="http://unsplash.it/250/150?gravity=center"></img>
            </a>
            <div className={styles.bottom_section}>
                <a href="#">
                    <img className={styles.profile_icon} src="http://unsplash.it/36/36?gravity=ce"></img>
                </a>
                <div className={styles.video_info}>
                    <a className={styles.video_title} href="#">Title</a>
                    <a className={styles.video_channel_name} href="#">Channel</a>
                    <div className={styles.video_metadata}>
                        <span>12k views</span> • <span>5 years ago</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Video