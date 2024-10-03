"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="dark:bg-nft-dark bg-white min-h-screen">{children}</div>
    </ThemeProvider>
  );
}
