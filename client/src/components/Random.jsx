import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_random } from "../redux/actions/actionType";
import { random } from "../redux/useSlices/randomSlice";

export default function Random() {
  const dispatch = useDispatch();
  const listNumber = useSelector((number) => number.random);
  console.log(listNumber);

  const handleRandom = () => {
    const randomNumber = Math.ceil(Math.random() * 10);
    dispatch(random(randomNumber));
  };

  return (
    <div>
      <h1>List number: {JSON.stringify(listNumber)}</h1>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
