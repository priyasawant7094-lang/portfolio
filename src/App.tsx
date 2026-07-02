import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import { Loader } from './components/Loader';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
