import "#/lib/styles/reset.css";
import "#/lib/styles/tailwind.css";
import type { PropsWithChildren, ReactElement } from "react";
import type { Metadata } from "next";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "NextJS Template",
  description: "A NextJS template by Leepos.",
  icons: "/next-js.svg"
};

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}