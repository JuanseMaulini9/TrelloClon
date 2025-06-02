import { useForm } from "react-hook-form";
import { type SubmitHandler } from "react-hook-form";

import { type FormFields } from "../types";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void
  loading: boolean
  error: string | null
}

const LoginForm = ({onSubmit, error, loading}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const handleFormSubmit: SubmitHandler<FormFields> = ({ username, password }) =>
    onSubmit(username, password);

  return (
    <form
      className="flex flex-col gap-5 w-3/4 "
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <section className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="hola@ejemplo.com"
          className="border-1 rounded-sm p-1 px-2"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-red-500">This field is required</span>
        )}
      </section>

      <section className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="****"
          className="border-1 rounded-sm p-1 px-2"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}
      </section>

      <button
        type="submit"
        className={`rounded-md py-3 px-10 mb-2 font-bold ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-white text-black hover:bg-gray-100 hover:cursor-pointer"
        }`}
      >
        {loading ? "cargando..." : "Log in account"}
      </button>
      {error && <span className="text-red-500">{error}</span>}
    </form>
  );
};

export default LoginForm;
