import styles from "./app.module.css";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <NewTask />
      <div>Teste</div>
    </>
  );
}

export default App;
