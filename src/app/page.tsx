import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero-section/HeroSection";
import OurTeam from "@/components/OurTeam/OurTeam";
import Questions from "@/components/Questions/Questions";
import Review from "@/components/Reviews/Review";



export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <OurTeam/>
      <Questions/>
      <Review/>
      <Footer/>
      
    </div>
  );
}
