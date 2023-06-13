import Header from "./components/Header/Header";
import Container from "./components/Videos/Container"
import Categories from "./components/Categories/Categories"
import styles from "./app.module.css"
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
        <Header collapsed={collapsed} setCollapsed={setCollapsed}></Header>
        <div className={styles.body}>
            <Sidebar collapsed={collapsed}></Sidebar>
            <div className={styles.right}>
                <Categories></Categories>
                <Container></Container>
            </div>
        </div>
    </div>
  );
}

export default App;
