import "#/lib/styles/reset.css";
import "#/lib/styles/tailwind.css";
import type { PropsWithChildren, ReactElement } from "react";
import type { Metadata } from "next";
import { Provider } from "./provider";
import { inter, robotoMono } from "#/lib/configs/font";

export const metadata: Metadata = {
  title: "NextJS Template",
  description: "A NextJS template by Leepos.",
  icons: "/next-js.svg"
};

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html className={`${inter.variable} ${robotoMono.variable}`}>
      <head />

      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}