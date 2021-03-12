import "./styles.css";
import Library from "./components/library";
import Header from "./components/header/Header";
import Destaque from "./components/Destaque/Destaque";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Library />
      <Destaque />
    </div>
  );
}
