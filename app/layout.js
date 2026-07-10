import "./globals.css"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Roamify Travels - Premium Travel & Tours Agency",
  description: "Book your dream destination with Roamify Travels.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}