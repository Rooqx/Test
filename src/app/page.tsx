import Hero from "@/Component/Sections/Hero";
import Header from "@/Component/Header";
import Features from "@/Component/Sections/Features";
import HowItWorks from "@/Component/Sections/How";
import Testimonials from "@/Component/Sections/Testimonials";
import Pricing from "@/Component/Sections/Pricing";
import FAQ from "@/Component/Sections/Faq";
import Footer from "@/Component/Footer";

import "@/Lib/FontAwesome";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
