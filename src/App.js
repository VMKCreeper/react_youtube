import Header from "./components/Header/Header";
import Container from "./components/Videos/Container"
import Categories from "./components/Categories/Categories"
import styles from "./app.module.css"

function App() {
  return (
    <div>
        <Header></Header>
        <Categories></Categories>
        <Container></Container>
    </div>
  );
}

export default App;
