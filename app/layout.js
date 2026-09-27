import { DM_Sans, Playfair_Display, DM_Mono } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeRegistry from '../components/ThemeRegistry';
import "./globals.css";

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ["latin"],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata = {
  title: "NBPS Alumni Association - Nyandarua Boarding Primary School",
  description: "Official website of the Nyandarua Boarding Primary School Alumni Association. Connecting graduates, empowering communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${dmMono.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
