import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);

    if (res.data.token) {
      login(res.data.token); // 👈 updates global state automatically
      alert("Login successful");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>

      <input
        name="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
        className="w-full p-3 border mb-3"
      />

      <input
        name="password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Password"
        className="w-full p-3 border mb-3"
      />

      <button onClick={submit} className="bg-green-600 text-white px-6 py-2">
        Login
      </button>
    </div>
  );
}
