// import Categories from "@/components/Categories";
// import DreamJobBanner from "@/components/DreamJobBanner";
import Hero from "@/components/Hero";
// import JobSteps from "@/components/JobSteps";
import PartnersSlider from "@/components/PartnersSlider";
import TrustedSection from "@/components/TrustedSection";
import { Button } from "@/components/ui/button";

import bolt from '@/assets/homepage/bolt.svg';
import { useNavigate } from "react-router-dom";
import DreamJobBanner from "@/components/DreamJobBanner";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-w-full max-w-full w-full mx-auto">
      <Hero />

      {/* Trusted Section */}
      <TrustedSection />

      {/* <section className="container">
        <div className="sub-container">
          <div className="w-full">
            <div className="lg:w-1/2 lg:max-w-1/2 mx-auto">
              <h2 className="text-center font-medium text-2xl lg:text-4xl text-[#3D3D3D]">Find your Dream Job in 4 easy steps</h2>
            </div>
          </div>
          <JobSteps />
        </div>
      </section> */}

      {/* <Categories /> */}

      {/* Job listing */}
      <div className="flex justify-center" id="coming-soon">
        <div className=" text-center container">
          <div className="sub-container">
            <span className="text-sm md:text-base lg:text-lg text-[#00347B] bg-accent py-3 px-3 md:px-6 rounded-3xl w-fit">
              <img className="inline" src={bolt} alt={'bolt icon'} /> <span className="px-3">Coming Soon</span> 🥳 🥳
            </span>
            <p className="text-lg md:text-2xl lg:text-4xl mt-6 md:mt-8 mb-6 md:mb-8">
              Job Listings will appear here as soon as they are available
            </p>
            <Button onClick={() => navigate('/jobs')} className="px-6 py-2 md:px-8 md:py-3 text-white bg-primary hover:bg-secondary rounded-3xl transition-colors">
              Explore Jobs
            </Button>
          </div>
        </div>
      </div>


      {/* Partners */}
      <div className="container" id="partners">
        <div className="sub-container text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 lg:mb-8">
            Our Wonderful Partners
          </h3>
          <p className="font-normal text-base md:text-lg lg:text-xl mb-3 md:mb-4 lg:mb-6">
            Here's a list of our amazing partners over the years
          </p>
          <PartnersSlider />
        </div>
      </div>


      <DreamJobBanner />
    </div>
  )
}

export default Homepage;
