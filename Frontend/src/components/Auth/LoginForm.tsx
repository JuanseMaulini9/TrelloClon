import { useState } from "react";
import useLogin from "../../hooks/useLogin";

interface LoginFormInterface {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [loginData, SetLoginData] = useState<LoginFormInterface>({
    username: "",
    password: "",
  });

  const {login} = useLogin()


  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(loginData)
  };

  return (
    <form
      className="flex flex-col justify-between items-center w-full gap-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username" className="font-bold text-text-main">
        Username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        className="h-8 rounded p-2 bg-secondary-gray"
        onChange={handleInput}
      />
      <label htmlFor="password" className="font-bold text-text-main">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="*******"
        className="h-8 rounded p-2 bg-secondary-gray"
        onChange={handleInput}
      />
     
      <button className="font-bold bg-blue-700 w-1/4 rounded py-2 hover:bg-blue-500">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
