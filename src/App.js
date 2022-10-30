import "./App.css";
import Header from "./components/Header";
import Card from "././components/Card";
import { separateData } from "./separate.js";

function App() {
  const cards = separateData.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Header></Header>
      <div className="container">{cards}</div>
    </>
  );
}

export default App;
