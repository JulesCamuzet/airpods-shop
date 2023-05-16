import "./Main.css";
import Left from "./Left/Left";
import Middle from "./Middle/Middle";
import Right from "./Right/Right";
import { useState } from "react";

const Main = () => {

  const [color, setColor] = useState("pink");

  return (
    <main>
      <Left color={color} />
      <Middle color={color} setColor={setColor} />
      <Right color={color} />
    </main>
  );
};

export default Main;
