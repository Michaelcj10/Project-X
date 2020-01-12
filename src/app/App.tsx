import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/header/header";
import Landing from "../components/landing/landing";
import Infographic from "../components/infographic/infographic";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Infographic />
      </div>
    );
  }
}

export default App;
