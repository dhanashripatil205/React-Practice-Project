import React from "react";

function ArrayLength({ arrayl }) {
  return (
    <div>
      {arrayl.length ? (
        <div>
          {arrayl.map((items) => (
            <div>{items.arrayl}</div>
          ))}
        </div>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default ArrayLength;
