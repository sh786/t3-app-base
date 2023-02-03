import { Inter as FontSans } from "@next/font/google";
import { type ReactNode } from "react";
import { MainNav } from "@/components/MainNav";
import { cn } from "@/utils/cn";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-slate-100 font-sans text-slate-800",
        fontSans.variable
      )}
    >
      <MainNav />
      <div className="container flex flex-1 flex-col">{children}</div>
    </div>
  );
}
