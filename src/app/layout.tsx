import type React from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { MenuProvider } from "@/context/MenuContext";
import {
  gothicCompact,
  gothicWide,
  gothicSpatial,
  gothicTall,
  gothicTight,
  gothicNarrow,
  gothicStandard,
} from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
    ${gothicCompact.variable}
    ${gothicWide.variable}
    ${gothicSpatial.variable}
    ${gothicTall.variable}
    ${gothicTight.variable}
    ${gothicNarrow.variable}
    ${gothicStandard.variable}
  `}
    >
      <body className="">
        <MenuProvider>{children}</MenuProvider>
        <Toaster />
      </body>
    </html>
  );
}
