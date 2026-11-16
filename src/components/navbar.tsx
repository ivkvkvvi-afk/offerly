"use client";

import Link from "next/link";
import { Search, User, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
      if (priceRef.current && !priceRef.current.contains(event.target as Node)) {
        setIsPriceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // Уменьшили pt-4 до pt-2 и pb-2 для компактности
    <header className="w-full bg-[#0f0f11] pt-2 pb-2 border-b border-[#1f1f23] sticky top-0 z-40">
      <div className="w-full max-w-[1440px] mx-auto px-8 flex items-center justify-between gap-4">
        
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-2xl tracking-tight shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="28" height="28" fill="white"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
          Offerly
        </Link>

        {/* Поиск */}
        <div className="flex-1 max-w-[900px] relative">
          <input 
            type="text" 
            placeholder="Что ищем? Игры, подписки, аккаунты..." 
            className="w-full h-10 pl-10 pr-24 rounded-md text-black bg-white focus:outline-none text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#00aaff] hover:bg-[#0099ee] text-white px-6 py-1.5 rounded text-sm font-medium transition-colors">
            Найти
          </button>
        </div>

        {/* Кнопки справа */}
        <div className="flex items-center shrink-0">
          <Link href="/create" className="bg-[#00aaff] hover:bg-[#0099ee] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Разместить объявление
          </Link>
          
          {/* Убрал ml-4, теперь кнопка Войти прижата к разделителю */}
          <div className="w-[1px] h-8 bg-gray-700 mx-4"></div> {/* Вертикальный разделитель для красоты */}
          
          <Link href="/login" className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white transition-colors">
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center bg-[#1f1f23]">
              <User className="w-4 h-4" />
            </div>
            <div className="flex flex-col hidden lg:flex">
              <span className="text-sm font-medium">Войти</span>
              <span className="text-xs text-gray-500">или Регистрация</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Нижний ряд фильтров */}
      <div className="w-full max-w-[1440px] mx-auto px-8 py-2 flex items-center gap-4 text-sm text-gray-300 relative mt-1">
        <div className="w-[130px] shrink-0"></div>

        <div className="flex items-center gap-6">
          
          {/* Категории */}
          <div className="relative" ref={categoryRef}>
            <button 
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center gap-1 hover:text-white transition-colors py-1"
            >
              Все категории <ChevronDown className="w-4 h-4" />
            </button>

            {isCategoryOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-[#1f1f23] border border-[#333] rounded-lg shadow-xl p-4 z-50">
                <label className="block text-xs text-gray-400 mb-2">Категория</label>
                <select className="w-full bg-[#0f0f11] border border-[#333] rounded p-2 text-white outline-none">
                  <option>Игры</option>
                  <option>Услуги</option>
                  <option>Подписки</option>
                  <option>Аккаунты</option>
                </select>
              </div>
            )}
          </div>

          {/* Цена */}
          <div className="relative" ref={priceRef}>
            <button 
              onClick={() => setIsPriceOpen(!isPriceOpen)}
              className="flex items-center gap-1 hover:text-white transition-colors py-1"
            >
              Цена <ChevronDown className="w-4 h-4" />
            </button>

            {isPriceOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-[#1f1f23] border border-[#333] rounded-lg shadow-xl p-4 z-50 flex flex-col gap-3">
                <label className="block text-xs text-gray-400">Диапазон цен</label>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="От" className="w-1/2 bg-[#0f0f11] border border-[#333] rounded p-2 text-white outline-none text-sm" />
                  <span className="text-gray-600">—</span>
                  <input type="number" placeholder="До" className="w-1/2 bg-[#0f0f11] border border-[#333] rounded p-2 text-white outline-none text-sm" />
                </div>
                <button className="mt-2 bg-[#00aaff] hover:bg-[#0099ee] text-white px-4 py-2 rounded text-sm font-medium transition-colors w-full">
                  Применить
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}