import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <Navbar isAdmin={false} />
      </header>

      {children}
    </div>
  );
}
