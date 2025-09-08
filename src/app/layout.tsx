import type React from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { MenuProvider } from "@/context/MenuContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <MenuProvider>{children}</MenuProvider>
        <Toaster />
      </body>
    </html>
  );
}
