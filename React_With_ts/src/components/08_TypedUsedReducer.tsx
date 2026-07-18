import { useReducer } from "react";

type counterState = {
  counterState: number;
  count: number;
  step: number;
};
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET"; to?: number };

function init(initialCount: number) {
  return { count: initialCount, step: 1 };
}

function CounterReducer(state: counterState, action: Action): counterState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.counterState + state.step };

    case "DECREMENT":
      return { ...state, count: state.counterState + state.step };

    case "RESET":
      return { ...state, count: action.to ?? 0 };

    default:
      return state;
  }
}

export function TypedReducer({ initial = 0 }: { initial?: number }) {
  const [state, dispatch] = useReducer(CounterReducer, initial, init);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
    </div>
  );
}
