import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}