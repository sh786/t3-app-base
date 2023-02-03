import { type ReactNode } from "react";
import { MainNav } from "../components/MainNav";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      {children}
    </div>
  );
}
