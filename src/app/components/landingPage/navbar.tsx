"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "alur", "news", "about"];
      let current = "home";

      for (const section of sections) {
        if (section === "home") continue;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }

      if (window.scrollY < 100) {
        current = "home";
      }
      
      setIsScrolled(window.scrollY > 20);
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", href: "#", label: "Beranda" },
    { id: "features", href: "#features", label: "Fitur" },
    { id: "alur", href: "#alur", label: "Alur" },
    { id: "news", href: "#news", label: "Berita" },
    { id: "about", href: "#about", label: "Tentang" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95  backdrop-blur-md shadow-md  py-0" : "bg-transparent py-2"}`}>
      <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between px-8 h-20">
        <div className="text-xl font-black tracking-tighter text-primary-container font-headline-md">Raih Prestasi</div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-label-bold pb-1 transition-colors ${
                activeSection === link.id
                  ? "text-primary-container font-bold border-b-2 border-primary-container"
                  : "text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/page/login")} className="px-6 py-2.5 bg-primary-container text-white font-label-bold rounded-lg shadow-lg shadow-primary-container/50 active:scale-95 duration-200 ease-out">Masuk</button>
        </div>
      </div>
    </nav>
  );
}
