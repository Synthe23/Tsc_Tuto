import { useState } from "react";

type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ cursor: "pointer" }} onClick={() => setCount(count + 1)}>
      {count}
    </div>
  );
}

export function LoaderDemo() {
  const [state, setState] = useState<LoadState>({
    status: "idle",
  });

  async function fetchData() {
    setState({ status: "loading" });

    // Simulate fetching
    setState({ status: "success", data: "Fetched!" });

    // Or, on failure:
    // setState({ status: "error", message: "Something went wrong" });
  }

  return <button onClick={fetchData}>{state.status}</button>;
}
