// import { useState } from 'react'
import "./App.css";
import { UserCard } from "./components/01_RequiredOptionalProps";
import { GreetA } from "./components/02_DefaultProps";
import {
  Panel,
  RequierdChildrenPanel,
} from "./components/03_ChildrenReactNode";
import { Button } from "./components/05_ComponentProps";
import { Counter } from "./components/06_States";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <UserCard id="01" name="Synthe_23" subtitle="Hi, I am a YouTuber" />
      <GreetA name="Omm" />

      <Panel
        title="I am Omm's Panel"
        children={
          <ul style={{ backgroundColor: "#3a5a40" }}>
            <li>One</li>
          </ul>
        }
      />

      <RequierdChildrenPanel
        title="I am a children"
        children={
          <ul style={{ backgroundColor: "#104911", color: "white" }}>
            <li>Two</li>
          </ul>
        }
      />

      <Button
        variant="primary"
        onClick={() => alert("Button Clicked!")}
        style={{textAlign: "center", fontFamily: "monospace"}}
      >Click me</Button>

      <Counter />
    </>
  );
}

export default App;
