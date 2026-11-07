import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import shmel from "./img/shmel.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "HelpText",
      userData: "",
    };

    this.inputClick = this.inputClick.bind(this);
  }
  helpText = "Help text";

  componentDidUpdate(prevProp) {
    if (this.state.helpText !== "Help") console.log("Some")
  }
  render() {
    return (
      <div className="name">
        <Header title="Шапка сайта" />
        <Header title="Шапка сайта!!!" />
        <Header title="!!!" />
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input
          placeholder={this.state.helpText}
          onChange={(event) => this.setState({ userData: event.target.value })}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        />
        <p>{this.state.helpText === "Help text" ? "Yes" : "No"}</p>
        <Image image={shmel} />
        <img src={shmel} />;
      </div>
    );
  }

  inputClick() {
    this.setState({ helpText: "Changed" });
    console.log("Clicked!");
  }
  mouseOver() {
    console.log("Mouse Over!");
  }
}

export default App;
