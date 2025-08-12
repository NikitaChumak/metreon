import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogos from './components/CompanyLogos';
import ProductCategories from './components/ProductCategories';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <img
          className="hero-background"
          src="https://api.builder.io/api/v1/image/assets/TEMP/1e74cfe7129932e03c868b558e4e3f68ecdb209a?width=2880"
          alt=""
        />

        <div className="container">
          <Navbar />
        </div>

        <Hero />
        <CompanyLogos />
      </div>

      <ProductCategories />
      <StatsSection />
      <ContactSection />
    </>
  );
}
