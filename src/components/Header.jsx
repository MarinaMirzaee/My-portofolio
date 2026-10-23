import { navLinks } from "../data/content";
import useScrolled from "../hooks/useScrolled";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.id);

export default function Header() {
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <a href="#home" className="logo">
        Marina<span>.</span>
      </a>

      <nav aria-label="Main">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
