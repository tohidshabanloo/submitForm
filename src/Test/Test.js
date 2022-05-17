import { useState } from "react";

const Test = () => {
  const [name, setName] = useState("Your Name is Here");
  function updateName(event) {
    const val = () => event.target.value;
    setName(val);
    setTimeout(() => setName(""), 3000);
  }

  return (
    <div>
      <p> You clicked Times</p>
      <input onChange={updateName} value={name} />
      <br />
      <br />
      <br />
      <div>
        Hello{" "}
        <div
          style={{
            color: "white",
            backgroundColor: "gray",
            width: "30%",
            margin: "auto",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {" "}
          {name}{" "}
        </div>
      </div>
      {/* <button onClick={increase}>Click Here</button> */}
    </div>
  );
};

export default Test;
