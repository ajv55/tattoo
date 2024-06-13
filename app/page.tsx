
import Image from 'next/image';
import Hero from './components/mainPage/hero';
import Background from './components/background';
import Nav from './components/mainPage/nav';
import Portfolio from './components/mainPage/portfolio';
import WelcomeSection from './components/mainPage/welcome';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />

      <Hero />

      <main>
        <WelcomeSection />
        

        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg max-w-2xl mx-auto">I&#39;m John Doe, a professional tattoo artist with over 10 years of experience in creating stunning and unique tattoos. My passion for art and dedication to my craft has allowed me to work with countless clients to bring their tattoo visions to life.</p>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Example images, replace with actual images */}
              <Image src="/tattoo1.jpg"  alt="Tattoo 1" width={200} height={200} className="w-full h-auto rounded-lg" />
              <Image src="/tattoo2.jpg" alt="Tattoo 2" width={200} height={200} className="w-full h-auto rounded-lg" />
              <Image src="/tattoo3.jpg" alt="Tattoo 3" width={200} height={200} className="w-full h-auto rounded-lg" />
              <Image src="/tattoo4.jpg" alt="Tattoo 4"  width={200} height={200} className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>

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

