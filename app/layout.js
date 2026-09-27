import { Montserrat, Lato } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeRegistry from '../components/ThemeRegistry';
import "./globals.css";

// Headings, buttons & brand marks. Variable font: every weight 100–900 in one file.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

// Body copy, captions, labels & form text. Lato is static, so only the weights we use are loaded.
const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: "NBPS Alumni Association - Nyandarua Boarding Primary School",
  description: "Official website of the Nyandarua Boarding Primary School Alumni Association. Connecting graduates, empowering communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
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
