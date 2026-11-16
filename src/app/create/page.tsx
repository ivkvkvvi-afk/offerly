"use client";

import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function CreatePage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const budget = Number(formData.get("budget"));

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      setError("Вы не авторизованы. Войдите в систему, чтобы создать объявление.");
      return;
    }

    const { error: insertError } = await supabase.from("requests").insert([
      {
        user_id: user.id,
        title,
        description,
        budget,
      },
    ]);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    alert("Заявка создана!");
    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f11]">
      <Navbar />

      <main className="flex-1 pt-6 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-[#1f1f23] p-6 border border-[#1f1f23] shadow-lg"
          >
            <h2 className="text-xl font-bold text-white mb-6">Создание заявки</h2>

            {error && (
              <div className="mb-4 p-3 rounded-md bg-red-900/30 border border-red-500/50 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Что вы ищете?
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full bg-[#0f0f11] border border-[#333] rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Подробное описание
                </label>
                <textarea
                  name="description"
                  rows={4}
                  required
                  className="w-full bg-[#0f0f11] border border-[#333] rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Бюджет (до)
                </label>
                <input
                  type="number"
                  name="budget"
                  className="w-full bg-[#0f0f11] border border-[#333] rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00aaff] hover:bg-[#0099ee] text-white font-medium py-4 rounded-md transition-colors text-sm"
              >
                Опубликовать заявку
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}