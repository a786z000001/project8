import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response?.data || "Error");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Enterprise Task Platform 🚀</h1>

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={login}>Login</button>

      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}

export default App;
