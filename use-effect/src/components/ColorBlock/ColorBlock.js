import { useState, useEffect } from "react";

function ColorBlock() {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  useEffect(() => {
    console.log("Поточний колір блока:", color);
  }, [color]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          margin: "0 auto",
          borderRadius: "12px",
          transition: "0.3s",
        }}
      ></div>

      <button
        onClick={changeColor}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Змінити колір
      </button>
    </div>
  );
}

export default ColorBlock;