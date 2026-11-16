"use client";

import { useState } from "react";

export function FiltersPanel() {
  const [category, setCategory] = useState("Все категории");
  const [type, setType] = useState("Все типы");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const categories = ["Все категории", "Транспорт", "Недвижимость", "Работа", "Услуги"];
  const types = ["Все типы", "Куплю", "Продам", "Услуга"];

  return (
    <div className="bg-[#1a1a1a] border-b border-[#1f1f23]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center gap-4 overflow-x-auto">
          {/* Категория */}
          <div className="flex items-center gap-2 shrink-0">
            <label className="text-xs text-gray-400 shrink-0">Категория:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#2a2a2a] border border-[#1f1f23] rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#00aaff] transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Цена */}
          <div className="flex items-center gap-2 shrink-0">
            <label className="text-xs text-gray-400 shrink-0">Цена:</label>
            <input
              type="number"
              placeholder="от"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              className="bg-[#2a2a2a] border border-[#1f1f23] rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#00aaff] transition-colors w-20"
            />
            <span className="text-xs text-gray-500">—</span>
            <input
              type="number"
              placeholder="до"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="bg-[#2a2a2a] border border-[#1f1f23] rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#00aaff] transition-colors w-20"
            />
          </div>

          {/* Тип заявки */}
          <div className="flex items-center gap-2 shrink-0">
            <label className="text-xs text-gray-400 shrink-0">Тип:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-[#2a2a2a] border border-[#1f1f23] rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#00aaff] transition-colors"
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}