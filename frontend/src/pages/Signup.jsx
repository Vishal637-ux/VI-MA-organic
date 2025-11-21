import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/signup", form);
    alert(res.data.message);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Signup</h1>

      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-3 border mb-3"
      />

      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-3 border mb-3"
      />

      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-3 border mb-3"
      />

      <button onClick={submit} className="bg-blue-600 text-white px-6 py-2">
        Signup
      </button>
    </div>
  );
}
