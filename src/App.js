import Header from "./components/Header/Header";
import Container from "./components/Videos/Container"
import Categories from "./components/Categories/Categories"
import styles from "./app.module.css"
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
        <Header></Header>
        <div className={styles.body}>
            <Sidebar></Sidebar>
            <div className={styles.right}>
                <Categories></Categories>
                <Container></Container>
            </div>
        </div>
    </div>
  );
}

export default App;
