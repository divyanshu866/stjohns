import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Events from "@/components/Events";
import CampusLife from "@/components/CampusLife";
import Facts from "@/components/Facts";
import Footer from "@/components/Footer";

// app/page.jsx
export default function Home() {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <main>
        <Facts />

        <WhyUs />
        <CampusLife />
        <Events items={3} />
        <Footer />
      </main>
    </div>
  );
}
