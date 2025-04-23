import "./globals.css";
import { Montserrat, Bebas_Neue } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebas.variable} bg-slate-50 text-black dark:bg-black dark:text-white`}
    >
      <body>{children}</body>
    </html>
  );
}
