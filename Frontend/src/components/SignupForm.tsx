import { useSignup } from "../hooks/auth/useSingup";
import { useState } from "react";

const SignupForm = () => {
  
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  const {data, signup, loading, error } = useSignup();
  
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signup(username, password)
  }
  
  console.log(data)

  return (
    <form action="" className="flex flex-col gap-5 w-3/4 " onSubmit={handleSubmit}>
      <section className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="hola@ejemplo.com"
          className="border-1 rounded-sm p-1 px-2"
          onChange={handleUsername}
        />
      </section>

      <section className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="****"
          className="border-1 rounded-sm p-1 px-2"
          onChange={handlePassword}
        />
      </section>

      <button
        type="submit"
        className="bg-white text-black rounded-md py-3 px-10 mb-2 font-bold"
      >
        {loading ? "cargando..." : "Create account"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default SignupForm;
