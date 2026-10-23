import useTheme from "./hooks/useTheme";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Strengths from "./components/Strengths";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <ScrollProgress />
      <Header />
      <ThemeToggle theme={theme} onToggle={toggle} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Strengths />
        <Projects />
        <Languages />
        <CV />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
