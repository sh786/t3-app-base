import Link from "next/link";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/NavMenu";

const navConfig = {
  sitename: "TripIt",
};

export function MainNav() {
  return (
    <header className="sticky top-0 z-40 w-full pr-4 dark:bg-slate-900">
      <div className="flex h-16 items-center">
        <div className="md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/img/tripit-banner.svg" alt={navConfig.sitename} height={60} width={160} priority />
          </Link>
        </div>
        <div className="ml-auto md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/explore" legacyBehavior passHref>
                  <NavigationMenuTrigger>explore</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <Link href="/explore?filter=beaches" legacyBehavior passHref>
                    <NavigationMenuLink>Beaches</NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
