import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Summary from "@/components/Summary";
import ExperienceSection from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Summary />
      <ExperienceSection />
      <Skills />
      <Education />
      <Languages />
      <Footer />
    </main>
  );
}

