import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 className="head">Namaste React using JSX</h1>;

const elem = <span>React Element</span>
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

const data = 1000;
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h2>{console.log("hevhvghdcvhdvchvh")}</h2>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
