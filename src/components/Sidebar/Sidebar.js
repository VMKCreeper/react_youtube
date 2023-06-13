import Explore from "./Explore"
import Playlists from "./Playlists"
import Start from "./Start"
import Subscriptions from "./Subscriptions"
import SidebarFooter from "./SidebarFooter"
import End from "./End"
import styles from "./sidebar.module.css"

const Sidebar = ({collapsed}) => {
    let className
    if(collapsed){
        className = styles.sidebarCollapsed
    } else {
        className = styles.sidebar
    }

    return(
        <div className={className}>
            <Start></Start>
            <Playlists></Playlists>
            <Subscriptions></Subscriptions>
            <Explore></Explore>
            <End></End>
            <SidebarFooter></SidebarFooter>
        </div>
    )
}

export default Sidebar