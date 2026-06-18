import Container from "@/components/ui/container";

import NavbarBrand from "./components/navbar-brand";
import NavbarNavigation from "./components/navbar-navigation";
import NavbarActions from "./components/navbar-actions";
import ThemeModeToggle from "./components/theme-mode-toggle";
import NavbarMobile from "./components/navbar-mobile";
import LanguageSwitcher
  from "./components/navbar-lenguage";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        w-full
        top-0
        z-50
        border-b
        backdrop-blur-md
      "
      style={{
        background:
          "color-mix(in srgb, var(--background) 88%, transparent)",
        borderColor:
          "var(--glass-border)",
      }}
    >
      <Container>
        <div
          className="
            flex
            h-16
            items-center
            justify-between
          "
        >
          <NavbarBrand />

          <NavbarNavigation />

          <div
            className="
              hidden
              items-center
              gap-3
              lg:flex
            "
          >
            <NavbarActions />

            <ThemeModeToggle />

             <LanguageSwitcher />
          </div>

          <NavbarMobile />
        </div>
      </Container>
    </header>
  );
}