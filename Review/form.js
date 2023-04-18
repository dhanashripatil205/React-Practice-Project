import React, { useState } from "react";

function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "", email: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) =>
          setName((prev) => ({ ...prev, firstName: e.target.value }))
        }
      />

      <input
        type="lastName"
        value={name.lastName}
        onChange={(e) =>
          setName((prev) => ({ ...prev, lastName: e.target.value }))
        }
      />

      <input
        type="email"
        value={name.email}
        onChange={(e) =>
          setName((prev) => ({ ...prev, email: e.target.value }))
        }
      />

      <p>
        Name:My name is {name.firstName}, My last Name is {name.lastName} & my
        Email id is {name.email}
        <h1>{JSON.stringify(name)}</h1>
      </p>
    </div>
  );
}

export default Form;
