import { useState } from "react";
import NameCard from "./NameCard";

function App() {
  const [mood, setMood] = useState("Happy 😃");

  function changeMood() {
    setMood(mood === "Happy 😃" ? "Sad 😞" : "Happy 😃");
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1e1e1e",
      color: "white",
      fontFamily: "Poppins, sans-serif"
    }}>
      <h1>Hello, my name is Om Vadher!</h1>
      <h3>Current Mood: {mood}</h3>
      <button
        onClick={changeMood}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "1px solid white",
          background: "transparent",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
          transition: "0.3s"
        }}
        onMouseOver={(e) => e.target.style.background = "white"}
        onMouseOut={(e) => e.target.style.background = "transparent"}
      >
        Change Mood
      </button>
    </div>
  );
}

export default App;
