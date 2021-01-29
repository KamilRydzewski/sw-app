import { useState, useEffect } from "react";

type Key = {
  key: string;
};

export const getKeyPressed = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }: Key) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }: Key) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};
