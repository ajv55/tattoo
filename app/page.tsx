
import Image from 'next/image';
import Hero from './components/mainPage/hero';
import Background from './components/background';
import Nav from './components/mainPage/nav';
import Portfolio from './components/mainPage/portfolio';
import WelcomeSection from './components/mainPage/welcome';
import AboutSection from './components/mainPage/about';
import ServicesSection from './components/mainPage/service';
import Testimonials from './components/mainPage/testimonials';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-black via-zinc-900 to-black text-white">
      <Nav />

      <Hero />

      <main>
        <WelcomeSection />
        

        <AboutSection />
        <ServicesSection />
        <Testimonials />
        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">Interested in getting a tattoo or have any questions? Feel free to reach out!</p>
            <form className="max-w-xl mx-auto">
              <div className="mb-4">
                <input type="text" className="w-full p-3 rounded-lg bg-gray-900 text-white" placeholder="Name" />
              </div>
              <div className="mb-4">
                <input type="email" className="w-full p-3 rounded-lg bg-gray-900 text-white" placeholder="Email" />
              </div>
              <div className="mb-4">
                <textarea className="w-full p-3 rounded-lg bg-gray-900 text-white" rows={4} placeholder="Message"></textarea>
              </div>
              <button type="submit" className="w-full p-3 rounded-lg bg-blue-600 text-white font-bold">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black py-4 text-center">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

