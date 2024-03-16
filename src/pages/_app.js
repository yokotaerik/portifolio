import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider, { ThemeContext } from "@/contexts/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="flex justify-center items-center min-h-screen dark:bg-neutral-800 pb-24">
        <div className="w-full md:w-7/12">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
