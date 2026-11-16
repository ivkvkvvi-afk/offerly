"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("offerly_welcome_seen");
    if (!hasSeen) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("offerly_welcome_seen", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="bg-[#1f1f23] border border-[#1f1f23] rounded-md max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* X button in top right */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header: Logo + Offerly */}
        <div className="flex flex-col items-center justify-center px-8 pt-8 pb-4">
          <div className="flex items-center gap-3 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="40"
              height="40"
              fill="white"
            >
              <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
            </svg>
            <span className="text-3xl font-bold text-white tracking-tight">Offerly</span>
          </div>
        </div>

        {/* Banner with gradient */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Добро пожаловать на Offerly</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          <p className="text-lg text-gray-300 mb-8 text-center leading-relaxed">
            Offerly — это обратная доска объявлений. Здесь вы не ищете, а заказываете.
            Опишите, что вам нужно, и продавцы сами предложат вам лучшую цену.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="flex-1 flex items-center justify-center gap-2 bg-[#00aaff] hover:bg-[#0099ee] text-white font-medium py-4 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Войти
            </Link>
            <Link
              href="/register"
              className="flex-1 flex items-center justify-center gap-2 bg-[#00aaff] hover:bg-[#0099ee] text-white font-medium py-4 px-6 rounded-md transition-colors text-sm sm:text-base"
            >
              Создать аккаунт
            </Link>
          </div>
        </div>

        {/* Close button at bottom */}
        <div className="px-8 pb-6">
          <button
            onClick={handleClose}
            className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}