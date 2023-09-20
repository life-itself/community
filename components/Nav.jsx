import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "../config/siteConfig";
import { MobileNavigation } from "./MobileNavigation";
import { NavItem } from "./NavItem";
import { ThemeSelector } from "./ThemeSelector";
import { SearchContext, SearchField } from "./search/index.jsx";
import { InstagramIcon, TwitterIcon, WhatsAppIcon } from "./custom/icons";

const Search = SearchContext(siteConfig.search?.provider);

const icons = {
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  whatsapp: (props) => {
    return (
      <>
        <span className="text-sm font-medium bg-secondary shadow-sm py-2 px-3 rounded hidden md:inline-block">Join the conversation</span>
        <WhatsAppIcon className={`${props.className} md:hidden`} />
      </>
    )
  }
}

function NavbarTitle() {
  const chunk = (
    <>
      {siteConfig.navbarTitle?.logo && (
        <img
          src={siteConfig.navbarTitle.logo}
          alt={siteConfig.navbarTitle.text}
          className="w-9 h-9 mr-1 fill-white"
        />
      )}
      {siteConfig.navbarTitle?.text}
      {siteConfig.navbarTitle?.version && (
        <div className="mx-2 rounded-full border border-slate-500 py-1 px-3 text-xs text-slate-500">
          {siteConfig.navbarTitle?.version}
        </div>
      )}
    </>
  );

  return (
    <Link
      href="/"
      aria-label="Home page"
      className="flex items-center font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white"
    >
      {siteConfig.navbarTitle && chunk}
      {!siteConfig.navbarTitle && siteConfig.title}
    </Link>
  );
}

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modifierKey, setModifierKey] = useState();

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl "
    );
  }, []);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 max-w-full
        ${isScrolled
          ? "bg-background/75 dark:bg-background-dark/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:dark:bg-background-dark/75"
          : "bg-background dark:bg-background-dark"
        }
      `}
    >
      <div className="mr-2 sm:mr-4 flex lg:hidden">
        <MobileNavigation navigation={siteConfig.navLinks} />
      </div>
      <div className="flex flex-none items-center">
        <NavbarTitle />
        <div className="hidden lg:flex ml-8 mr-6 sm:mr-8 md:mr-0">
          {siteConfig.navLinks.map((item) => (
            <NavItem item={item} key={item.name} />
          ))}
        </div>
      </div>
      <div className="relative flex items-center basis-auto justify-end gap-4 xl:gap-5 md:shrink w-full">
        {Search && (
          <Search>
            {({ query }) => (
              <SearchField modifierKey={modifierKey} onOpen={query?.toggle} />
            )}
          </Search>
        )}
        <ThemeSelector />
        {siteConfig.github && (
          <Link href={siteConfig.github} className="group" aria-label="GitHub">
            <GitHubIcon className="h-6 w-6 dark:fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
          </Link>
        )}
        {siteConfig.discord && (
          <Link
            href={siteConfig.discord}
            className="group"
            aria-label="Discord"
          >
            <DiscordIcon className="h-8 w-8 dark:fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
          </Link>
        )}
        {siteConfig.socialLinks && Object.entries(siteConfig.socialLinks).map(([key, value]) => {
          const SocialIcon = icons[key]
          return <a
            key={key}
            href={value}
            className="group"
            aria-label={key}
            target="_blank"
          >
            <SocialIcon className="h-5 w-5 md:h-6 md:w-6 dark:fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
          </a>
        })}
      </div>
    </header>
  );
}
