import Empowering from "./components/Empowering"
import FAQ from "./components/FAQ"
import FeaturesListicle from "./components/FeatureListicle"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import PricingSection from "./components/Pricing"
import Testimonials11 from "./components/Testimonials"


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Empowering />
        <FeaturesListicle />
        <Testimonials11 />
        <PricingSection />
        <FAQ />
        <Footer />

    </div>
  )
}

export default Home