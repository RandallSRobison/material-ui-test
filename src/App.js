import React from "react";
import Menu from "./components/Menu";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      {routes}
    </div>
  );
}
export default App;