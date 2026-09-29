
import Hero from "../components/home.component";
import Navbar from "../components/navbar";
import ServicesPreview from "../components/service";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesPreview />
        <WhyChooseUs />
      </main>
    </>
  );
}

export default Home;