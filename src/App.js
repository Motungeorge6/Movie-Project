import React from "react";
import Page from "./components/page/Page";
import CardData from "./components/card/CardData";

function App() {
  return (
    <div className="App">
      <Page data={CardData} />
    </div>
  );
}

export default App;
