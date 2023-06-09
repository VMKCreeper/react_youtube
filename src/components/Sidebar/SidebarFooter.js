import styles from "./sidebar.module.css"

const SidebarFooter = () => {
    return(
        <section className={styles.section}>
            <a href="#">About</a>
            <a href="#">Press</a>
            <a href="#">Copyright</a>
            <br></br>
            <a href="#">Contact us</a>
            <a href="#">Creators</a>
            <br></br>
            <a href="#">Advertise</a>
            <a href="#">Developers</a>
            <br></br><br></br>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Policy & Safety</a>
            <br></br>
            <a href="#">How YouTube works</a>
            <br></br>
            <a href="#">Test new features</a>
            <br></br><br></br>
            <a href="#">© 2023 Google LLC</a>
        </section>
    )
}

export default SidebarFooter