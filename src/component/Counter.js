import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter
} from "./../services/actions/action";

function Counter() {
  //********using basic javascript***********:
  //   let [count, setCount] = useState(0);
  //   //handle Increment button:
  //   const handleIncrement = () => {
  //     setCount(count => count + 1);
  //   };
  //   //handle Decrement button:

  //   const handleDecrement = () => {
  //     setCount(count => count - 1);
  //   };
  //   //handle Reset:
  //   const handleReset = () => {
  //     setCount((count = 0));
  //   };

  //Using Redux:
  const dispatch = useDispatch();
  //handle increment button:
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  //handle decrement button:
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  //handle reset button:
  const handleReset = () => {
    dispatch(resetCounter());
  };

  const count = useSelector(state => state.count);
  return (
    <div className="text-center mt-5 border w-25 p-3  mx-auto shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Counter App</h1>
      <h3>
        Count: {count}
      </h3>
      <button className="m-2 btn btn-success" onClick={handleIncrement}>Increment</button>
      <button className="m-2 btn btn-danger" onClick={handleDecrement}>Decrement</button>
      <button className="m-2 btn btn-primary" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
