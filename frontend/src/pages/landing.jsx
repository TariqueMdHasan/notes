
import Hero from "../components/landingCards/hero";
import ImageSection from "../components/landingCards/imageSection";
import manlaptop from '../assets/manlaptop.png'
import Feature1 from '../components/landingCards/feature1'
import Pricing from "../components/landingCards/pricing";
import ml2 from '../assets/ml2.png'
import Reviews from '../components/landingCards/reviews'
import Footer from '../components/landingCards/footer'
import Qna from '../components/landingCards/qna'

const Landing = () => {
  return (
   
       <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black"> 
      <div
        className="pt-30 flex justify-center p-5 items-center gap-20 flex-wrap"
      >
        <Hero />
      </div>
      <ImageSection
        src={manlaptop}
        alt="App preview showing dashboard and notes"
      />
      
      <div
        className="flex justify-center p-5 items-center gap-20 
        flex-wrap min-h-screen bg-gradient-to-br 
        from-[#182137] via-[#0e1639] to-[#020617]"
      >
        <Feature1 />
      </div>
      <div
        className="flex justify-center p-5 items-center gap-20 
        flex-wrap min-h-screen "
      >
        <Pricing />
      </div>
      <ImageSection
        src={ml2}
        alt="App preview showing dashboard and notes"
      />
      <div
        className="flex justify-center p-5 items-center gap-20 
        flex-wrap min-h-screen bg-gradient-to-br
        from-[#182137] via-[#0e1639] to-[#020617]"
      >
        <Reviews />
      </div>
      <div
        className="flex justify-center p-5 items-center gap-5
        flex-col min-h-screen bg-gradient-to-br
        from-[#262f43] via-[#242c50] to-[#0f183f]"
      >
        <Qna />
      </div>
      <Footer />
      

    </div>


  );
};

export default Landing;







