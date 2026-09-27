import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutSection from '../components/home/AboutSection';
import ProjectsSection from '../components/home/ProjectsSection';
import EventsSection from '../components/home/EventsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <EventsSection />
      <CTASection />
      <Footer />
    </>
  );
}
