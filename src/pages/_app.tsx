import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { Public_Sans } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

const publicF = Public_Sans({ subsets: ["latin"] });

export type NextPageWithLayout<P = Record<string, string>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  theme: 'dark' | 'light';
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider
    defaultTheme="light"
    attribute="class"
    forcedTheme={Component.theme || null}
  >
    <main className={publicF.className}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />


      {getLayout(<Component {...pageProps} />)}
    </main>
  </ThemeProvider> 
  
  )
}
