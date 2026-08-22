import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Testimonial />
    </main>
  );
}
