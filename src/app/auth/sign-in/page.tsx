'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Page({ searchParams }: any) {
  const router = useRouter();
  const callbackUrl = searchParams.callbackUrl || '/';
  const [loginError, setLoginError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  async function handleSignIn(data: any) {
    
    const response = await signIn('credentials', {
      identifier: data.identifier,
      password: data.password,
      redirect: false,
    });
    if (response?.error) {
      setLoginError(response.error);
    } else {
      router.push('/');
    }
  }



  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">

      {loginError && (
        <div className="rounded bg-red-500 p-2 text-center text-white">
          {loginError}
        </div>
      )}
      <div className="w-full rounded-lg bg-glass bg-opacity-20 p-8 shadow sm:max-w-md ">
        <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-4" action="#">
          <h1 className="text-xl font-bold leading-tight text-white md:text-2xl">
            Entre na sua conta
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
              {...register('identifier', {
                required: 'O campo de identificação é obrigatório',
              })}
            />
            {errors.identifier?.message && (
              <span className={'lowercase text-red-600'}>
                {errors.identifier.message}
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
              {...register('password', {
                required: true,
              })}
            />
            {errors.password?.type === 'required' && (
              <span className={'lowercase text-red-600'}>
                O campo de senha é obrigatório
              </span>
            )}
          </div>
          <button>
            Entrar
          </button>

          <p className="text-sm font-light text-white">
            Não tem uma conta?{' '}
            <a
              href="/auth/sign-up"
              className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
            >
              Registre-se aqui
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
