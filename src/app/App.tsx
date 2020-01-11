import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/header/header";
import Landing from "../components/landing/landing";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
