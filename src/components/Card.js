import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import useCounter from "../hooks/counter-hook";

export default function Card(props) {
  //const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, increment, decrement] = useCounter(0, 1);

  // const increaseCounter = () => {
  //   setLoading(true);
  //   //const newCounter = counter + 1;
  //   setTimeout(() => {
  //     setCounter(counter + 1);
  //     setLoading(false);
  //   }, 3000);
  // };

  // const decreaseCounter = () => {
  //   setCounter(counter - 1);
  // };

  useEffect(() => {
    //setCounter(props?.counter);
    //alert("use effect ke trigger saat pertama kali reload");
    console.log(" ketrigger ");
    console.log("useEffect pertama counter " + count);

    // increaseCounter();
  }, []);

  useEffect(() => {
    console.log("useEffect kedua counter " + count);
  }, [count, name]);

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
      }}
    >
      <h4> Card </h4>
      <h2 style={{ fontSize: 60 }}>{count}</h2>
      <button
        className={style.btnDecrease}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            decrement();
          }, 3000);
        }}
      >
        {" "}
        -{" "}
      </button>
      <button className={style.btnIncrease} onClick={() => increment()}>
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
