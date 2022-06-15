import { useDispatch } from "react-redux";
import { increment } from "../redux/counter";

import Button from "./Button";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        color="yellow"
        onClick={() => {
          dispatch(increment());
        }}
        name="Click me!"
      />
    </>
  );
};

export default Counter;
