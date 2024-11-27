import Hero from '../components/Hero';
import ServicesSection from '../components/Services';
import Steps from '../components/Steps';
import AboutSection from '../components/About';

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <ServicesSection />
      <Steps />
      <AboutSection />
    </div>
  );
}