// import { useState } from 'react'
import "./App.css";
import { UserCard } from "./components/01_RequiredOptionalProps";
import { GreetA } from "./components/02_DefaultProps";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <UserCard id="01" name="Synthe_23" subtitle="Hi, I am a YouTuber" />
      <GreetA name="Omm"/>
    </>
  );
}

export default App;
