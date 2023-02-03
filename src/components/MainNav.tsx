import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex flex-col items-center justify-center gap-4">
      <Link href="/">
        <span className="text-2xl font-bold">Create T3 App</span>
      </Link>
    </nav>
  );
}
