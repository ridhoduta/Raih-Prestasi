import Navbar from "./components/landingPage/navbar";
import Hero from "./components/landingPage/hero";
import Fitur from "./components/landingPage/fitur";
import Alur from "./components/landingPage/alur";
import Berita from "./components/landingPage/berita";
import Tentang from "./components/landingPage/tentang";
import Footer from "./components/landingPage/footer";

async function getNews() {
  try {
    const res = await fetch("https://raih-prestasi.vercel.app/api/admin/news?limit=4", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const newsItems = await getNews();

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <Navbar />
      <Hero />
      <Fitur />
      <Alur />
      <Berita newsItems={newsItems} />
      <Tentang />
      <Footer />
    </div>
  );
}
