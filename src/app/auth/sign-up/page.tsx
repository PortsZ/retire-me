"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
      terms: false,
    },
  });

  const password = watch("password");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  async function registerUser(data: any) {
    try {
      const response = await axios.post(
        `${apiUrl}/api/auth/sign-up`,
        {
          email: data.email,
          password: data.password,
        }
      );
      //
      if (response.status === 201) {
        router.push("/auth/sign-in");
      }
      //
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-screen h-full flex-col items-center justify-center gap-6">
      <div className="w-full rounded-lg bg-glass bg-opacity-20 p-8 shadow sm:max-w-md ">
        <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4" action="#">
          <h1 className="text-xl font-bold leading-tight text-white md:text-2xl">
            Registre-se gratuitamente
          </h1>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded bg-background p-2.5 text-black sm:text-sm"
              placeholder="name@company.com"
              {...register("email", {
                required: "O campo email é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Endereço de email inválido",
                },
              })}
            />
            {errors?.email?.message && (
              <span className={"lowercase text-red-600"}>
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-white"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded bg-background p-2.5 text-black sm:text-sm"
              placeholder="••••••••"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <span className={"lowercase text-red-600"}>
                O campo de senha é obrigatório
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-white"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirm_password"
              className="block w-full rounded bg-background p-2.5 text-black sm:text-sm"
              placeholder="••••••••"
              {...register("confirm_password", {
                required: "O campo confirmar a senha é obrigatório",
                validate: (value) =>
                  value === password || "As senhas não são iguais",
              })}
            />
            {errors.confirm_password && (
              <span className={"lowercase text-red-600"}>
                {errors.confirm_password.message}
              </span>
            )}
          </div>

          <button
            className="bg-slate-700 rounded p-2"
          >
            Registrar
          </button>
          <p className="text-sm font-light text-white">
            Já possui uma conta?{" "}
            <a
              href="/auth/sign-in?callbackUrl=/"
              className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
            >
              Faça login aqui
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
