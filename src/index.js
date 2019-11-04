import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

const sayHappyHello = () => console.log("hello it's the happy div");

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.sayHappyHello} />
  </div>,
  document.getElementById("root")
);
