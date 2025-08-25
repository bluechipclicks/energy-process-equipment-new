import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Energy Process Equipments (EPE) ",
  description:
    "Energy Process Equipments (EPE) has been designing and manufacturing boilers for over 15 years, thus developing a reputation for producing reliable and long-life products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
