import React from "react";

function Example4() {
  const list = ["uce", "tei", "lop", "jio"];

  const wholelist = list.map((sol, index) => (
    <h2
      key={index}
      style={{
        color: "brown",
        border: "2px dotted grey",
        backgroundColor: "cyan",
      }}
    >
      {index} {sol}
    </h2>
  ));

  return <div>{wholelist}</div>;
}

export default Example4;
