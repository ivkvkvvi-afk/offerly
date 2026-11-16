"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // 1. Создаем пользователя (Auth)
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    // 2. Сразу входим, чтобы получить сессию
    if (data.user) {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      // 3. Если вход успешен, создаем профиль в базе
      const { error: insertError } = await supabase.from("profiles").insert([
        {
          id: data.user.id,
          username,
          nickname: username,
        },
      ]);

      if (insertError) {
        if (insertError.message.includes("duplicate") || insertError.code === "23505") {
          setError("Этот никнейм уже занят");
        } else {
          setError(insertError.message);
        }
        return;
      }

      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f11]">
      <Navbar />

      <main className="flex-1 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="rounded-xl bg-[#1f1f23] p-8 border border-[#1f1f23] shadow-lg">
            <div className="mb-8 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="32"
                height="32"
                fill="white"
              >
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
              </svg>
              <span className="text-xl font-bold text-white tracking-tight">Создать аккаунт</span>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-md bg-red-900/30 border border-red-500/50 text-red-400 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Ваш никнейм
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Введите никнейм"
                  className="w-full bg-[#0f0f11] border border-[#333] rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Введите email"
                  className="w-full bg-[#0f0f11] border border-[#333] rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Пароль
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Придумайте пароль"
                  className="w-full bg-[#0f0f11] border border-[#333] rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00aaff] hover:bg-[#0099ee] text-white font-medium py-3 rounded-md transition-colors text-sm"
              >
                Зарегистрироваться
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Уже есть аккаунт?{" "}
              <Link
                href="/login"
                className="text-[#00aaff] hover:text-[#0099ee] hover:underline"
              >
                Войти
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}