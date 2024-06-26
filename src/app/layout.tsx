// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeaderMegaMenu} from "@/Component/Navbar/Navigation";
import { FooterLinks } from "@/Component/Footer/Footer";

const theme = createTheme({
 
  })
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <HeaderMegaMenu/>
          <>{children}</>
          <FooterLinks/>
        </MantineProvider>
      </body>
    </html>
  );
}