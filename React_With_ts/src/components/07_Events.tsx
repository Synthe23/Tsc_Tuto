import {
  useState,
  type ChangeEvent,
  type MouseEvent,
  type KeyboardEvent,
  type FormEvent,
} from "react";

export function FormExample() {
  const [name, setName] = useState("");
  const [color, setcolor] = useState("red");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }

  function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      alert("Enter Pressed!");
    }
  }

  function handleColorChange(event: ChangeEvent<HTMLSelectElement>) {
    console.log(name);
  }

  function handleFinalFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleFinalFormSubmit}>
      <input
        placeholder="Enter your name"
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />
      <select value={color} onChange={handleColorChange}>
        <option value="Red">Red</option>
      </select>
      <button onClick={handleButtonClick} type="submit">
        Click
      </button>
    </form>
  );
}
