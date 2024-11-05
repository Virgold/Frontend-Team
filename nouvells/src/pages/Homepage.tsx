import Categories from "@/components/Categories";
import DreamJobBanner from "@/components/DreamJobBanner";
import Hero from "@/components/Hero";
import JobSteps from "@/components/JobSteps";
import PartnersSlider from "@/components/PartnersSlider";
import TrustedSection from "@/components/TrustedSection";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    <div className="container min-w-full max-w-full w-full mx-auto">
      <section className="section">
        <Hero />
      </section>

      <section className="section">
        <TrustedSection />
      </section>
      <section className="section">
        <div className="w-full">
          <div className="w-1/2 max-w-1/2 mx-auto">
            <h2 className="text-center font-medium text-4xl text-[#3D3D3D]">Find your Dream Job in 4 easy steps</h2>
          </div>
        </div>
        <JobSteps />
      </section>

      <section className="section">
        <Categories />
      </section>

      {/* Job listing */}
      <section className="section">
        <div className="flex justify-center">
          <div className="w-full md:w-[60%] lg:w-[40%] my-8 md:my-16 py-8 text-center">
            <span className="block text-sm md:text-base lg:text-lg text-[#00347B] bg-[#E4ECF6] py-3 px-6 md:px-8 rounded-3xl">
              Coming Soon 🥳 🥳
            </span>
            <p className="text-lg md:text-2xl lg:text-4xl mt-6 md:mt-8 mb-6 md:mb-8">
              Job Listings will appear here as soon as they are available
            </p>
            <Button className="px-6 py-2 md:px-8 md:py-3 text-white bg-primary hover:bg-secondary rounded-3xl transition-colors">
              Explore Jobs
            </Button>
          </div>
        </div>
      </section>


      {/* Partners */}
      <section className="section">
        <div className="py- text-center">
          <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 lg:mb-8">
              Our Wonderful Partners
            </h3>
            <p className="font-normal text-base md:text-lg lg:text-xl mb-3 md:mb-4 lg:mb-6">
              Here's a list of our amazing partners over the years
            </p>
            {/* Partners Slider */}
            <div className="w-full mx-auto">
              <PartnersSlider />
            </div>
          </div>
        </div>
      </section>


      <DreamJobBanner />
    </div>
  )
}

export default Homepage;
