import React, { useState } from "react";
import axios from "axios";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      const res = await axios.post(
        "http://localhost:3002/signup",
        {
          email,
          password,
        }
      );

      alert(res.data.message);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div>

      <h2>Signup</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>
        Signup
      </button>

    </div>
  );
};

export default Signup;