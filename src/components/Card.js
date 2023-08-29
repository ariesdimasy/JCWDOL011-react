import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
// import useCounter from "../hooks/counter-hook";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../app/features/counter/counterSlice";

export default function Card() {
  //const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  //const [loading, setLoading] = useState(false);
  //const [count, increment, decrement] = useCounter(0, 1);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // const increaseCounter = () => {
  //   setCounter(counter + 1);
  // };

  // const decreaseCounter = () => {
  //   setCounter(counter - 1);
  // };

  useEffect(() => {
    //setCounter(props?.counter);
    //alert("use effect ke trigger saat pertama kali reload");
    console.log(" ketrigger ");
    console.log("useEffect pertama counter " + counter);

    // increaseCounter();
  }, []);

  return (
    <div
      style={{
        border: "1px solid grey",
        width: "200px",
        height: "250px",
        marginTop: "30px",

        borderRadius: 5,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        backgroundColor: "green",
      }}
    >
      <h4> Card </h4>
      <h2 style={{ fontSize: 60 }}>{counter}</h2>
      <button
        className={style.btnDecrease}
        onClick={() => {
          //decreaseCounter();
          dispatch(decrement());
        }}
      >
        {" "}
        -{" "}
      </button>
      <button
        className={style.btnIncrease}
        onClick={() => {
          //increaseCounter();
          dispatch(increment());
        }}
      >
        {" "}
        +{" "}
      </button>
      <br></br>
      Name : {name}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
