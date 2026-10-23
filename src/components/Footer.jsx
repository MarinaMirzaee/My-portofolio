import { site } from "../data/content";

export default function Footer() {
  return (
    <footer>
      <a href="#home" className="logo">
        Marina<span>.</span>
      </a>
      <p>Designed and built by {site.name}.</p>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
