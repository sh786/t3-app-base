import { type ReactNode } from "react";
import { MainNav } from "@/components/MainNav";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <MainNav />
      <div className="container flex flex-1 flex-col">{children}</div>
    </div>
  );
}
