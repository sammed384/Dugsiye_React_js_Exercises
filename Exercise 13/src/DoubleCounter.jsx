import { useReducer } from "react";

const initialState = { counterA: 0, counterB: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_A":
      return { ...state, counterA: state.counterA + 1 };
    case "INCREMENT_B":
      return { ...state, counterB: state.counterB + 1 };
    case "DECREMENT_A":
      return { ...state, counterA: state.counterA - 1 };
    case "DECREMENT_B":
      return { ...state, counterB: state.counterB - 1 };
    case "Reset_All":
      return initialState;

    default:
      break;
  }
};
const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Double Counter</h2>
      <div>
        <h3>Counter A: {state.counterA}</h3>
        <button onClick={() => dispatch({ type: "INCREMENT_A" })}>+A</button>
        <button
          disabled={state.counterA === 0}
          onClick={() => dispatch({ type: "DECREMENT_A" })}
        >
          -A
        </button>
      </div>
      <div>
        <h3>Counter B: {state.counterB}</h3>
        <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+B</button>
        <button
          disabled={state.counterB === 0}
          onClick={() => dispatch({ type: "DECREMENT_B" })}
        >
          -B
        </button>
      </div>
      <button onClick={() => dispatch({ type: "Reset_All" })}>
        Reset Both
      </button>
    </div>
  );
};

export default DoubleCounter;
