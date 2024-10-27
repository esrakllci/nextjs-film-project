import "./styles/global.css";
import "./styles/variables.css";
import "./styles/reset.css";

import { Inter } from "next/font/google";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="container">{children}</body>
    </html>
  );
}
