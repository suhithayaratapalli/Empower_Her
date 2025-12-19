import React, { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          color: isRed ? "red" : "blue",
          fontSize: "20px",
          marginBottom: "10px",
        }}
      >
        This text changes color
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
};

export default ColorToggle;
