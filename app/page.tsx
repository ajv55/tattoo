
import Image from 'next/image';
import Hero from './components/mainPage/hero';
import Background from './components/background';
import Nav from './components/mainPage/nav';
import Portfolio from './components/mainPage/portfolio';
import WelcomeSection from './components/mainPage/welcome';
import AboutSection from './components/mainPage/about';
import ServicesSection from './components/mainPage/service';
import Testimonials from './components/mainPage/testimonials';
import CallToAction from './components/mainPage/action';
import ContactSection from './components/mainPage/contact';
import Footer from './components/mainPage/footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br z-40  from-black via-zinc-900 to-black text-white">
      <Nav />

      <Hero />

      <main>
        <WelcomeSection />
        

        <AboutSection />
        <ServicesSection />
        <Testimonials />
        <CallToAction />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

