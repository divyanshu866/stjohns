import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminLayout({ children }) {
  return (
    <div>
      <header>
        <Navbar isAdmin={true} />
      </header>

      {children}
      {/* <Footer /> */}
    </div>
  );
}
