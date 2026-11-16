"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ListingsGrid } from "@/components/listings-grid";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("listings");

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f11]">
      <Navbar />

      <main className="flex-1 pt-6 px-4 sm:px-6 lg:px-8">
        {/* Wide banner */}
        <div className="relative h-64 bg-[#1f2937] overflow-hidden rounded-xl mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937] to-[#111827]" />
        </div>

        {/* Profile header with overlapping avatar */}
        <div className="mt-[-60px] flex items-start gap-4 px-4">
          {/* Avatar overlapping banner and content */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-full border-4 border-[#0f0f11] bg-[#333] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf376fde?w=200&h=200&fit=crop"
                alt="Аватар"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">Player123</h1>
              <Link
                href="/profile/edit"
                className="px-4 py-2 bg-[#00aaff] hover:bg-[#0099ee] text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap"
              >
                Редактировать профиль
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Регистрация: 15.11.2026
            </p>
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              ★ ★ ★ ★ ★
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-[#1f1f23] mb-6 px-4">
          <button
            onClick={() => setActiveTab("listings")}
            className={`pb-2 border-b-2 transition-colors ${
              activeTab === "listings"
                ? "border-[#00aaff] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Мои заявки
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 border-b-2 transition-colors ${
              activeTab === "reviews"
                ? "border-[#00aaff] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Отзывы
          </button>
        </div>

        {/* Tab content */}
        <div className="px-4">
          {activeTab === "listings" ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Здесь будут ваши заявки</p>
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Отзывов пока нет</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}