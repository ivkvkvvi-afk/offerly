import Link from "next/link";

interface Listing {
  id: string | number;
  title: string;
  price: number | string;
  city: string;
  time: string;
}

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listing/${listing.id}`} className="group flex flex-col w-full">
      
      {/* Прямоугольная картинка (похожа на квадрат) */}
      <div className="relative w-full h-40 rounded-lg bg-[#1f1f23] mb-3 overflow-hidden">
         {/* Сюда потом добавятся реальные фото, пока темный плейсхолдер */}
      </div>

      {/* Текстовая часть */}
      <div className="flex flex-col px-1">
        <h3 className="text-white text-[15px] font-medium mb-1 line-clamp-2 leading-snug group-hover:text-[#00aaff] transition-colors">
          {listing.title}
        </h3>
        
        <p className="text-white text-lg font-bold mb-1">
          {listing.price} ₽
        </p>
        
        <div className="mt-auto flex flex-col text-[13px] text-gray-400">
          <span>{listing.city}</span>
        </div>
      </div>
      
    </Link>
  );
}