import Button from "./Button";
import { useState } from "react";
export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  function handleClick() {
    setCount((x) => x + 1);
  }
  return (
    <>
      <h1 className={"text-5xl font-bold"}>{count}</h1>
      <div className="mt-5 flex items-center gap-2">
        <Button onClick={handleClick}>+ 1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
          }}>
          + 3
        </Button>
      </div>
    </>
  );
}
