import { Inter } from "next/font/google";
import "../components/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gyanarthi Media College",
  description: "Enroll yourself with gyanarthi and start your career",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
