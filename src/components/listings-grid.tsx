"use client";

import { ListingCard } from "./listing-card";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Request {
  id: string;
  user_id: string;
  title: string;
  description: string;
  budget: number;
  created_at: string;
}

export function ListingsGrid() {
  const [listings, setListings] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      const { data, error } = await supabase
        .from("requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching listings:", error);
        setListings([]);
      } else {
        setListings(data || []);
      }
      setLoading(false);
    }

    fetchListings();
  }, []);

  if (loading) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-pulse rounded-full bg-[#333] w-12 h-12 mb-4" />
        <p className="text-gray-400 text-sm">Загрузка объявлений...</p>
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-400 text-sm">Пока нет объявлений</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {listings.map((item) => (
        <ListingCard
          key={item.id}
          listing={{
            id: item.id,
            title: item.title,
            price: item.budget,
            city: "",
            time: new Date(item.created_at).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
          }}
        />
      ))}
    </div>
  );
}