import { Navbar } from "@/components/navbar";
import { ListingsGrid } from "@/components/listings-grid";
import { WelcomeModal } from "@/components/welcome-modal"; // Вернули импорт

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f11]">
      <WelcomeModal /> {/* Плашка снова показывается */}
      
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8 pt-6 pb-12">
        <ListingsGrid />
      </main>
    </div>
  );
}