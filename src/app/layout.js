import { Stick_No_Bills, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const stickNoBills = Stick_No_Bills({ 
  variable: "--deco-font",
  subsets: ["latin"]
});
const jetBrains = JetBrains_Mono({ 
  variable: "--main-font",
  subsets: ["latin"]
});



export const metadata = {
  title: "TinyBitCreations Strony internetowe",
  description: "Firmowe strony internetowe",
  metadataBase: new URL('https://tinybitcreations.pl/'),

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${stickNoBills.variable} ${jetBrains.variable}`}>
      <body className="font-main">
        {children}
        </body>
    </html>
  );
}
