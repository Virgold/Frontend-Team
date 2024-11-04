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
      <Hero />
      <TrustedSection />
      <div className="w-full">
        <div className="w-1/2 max-w-1/2 mx-auto mt-16">
          <h2 className="text-center font-medium text-4xl text-[#3D3D3D]">Find your Dream Job in 4 easy steps</h2>
        </div>
      </div>
      <JobSteps />
      <Categories />

      {/* Job listing */}
      <div>
        <div>
          <div className="w-[40%] my-16 py-8 text-center mx-auto">
            <span className="mb-12 text-[#00347B] bg-[#E4ECF6] py-4 px-8 rounded-3xl">Coming Soon 🥳 🥳</span>
            <p className="text-4xl mt-8 mb-8">Job Listings will appear here as soon as it is available</p>
            <Button className="text-white hover:text-black hover:bg-secondary rounded-3xl">Explore Jobs</Button>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div>
        <div className="py-4 text-center">
          <div>
            <h3 className="text-4xl mb-8">Our Wonderful Partners</h3>
            <p className="font-normal text-xl mb-4">Here's a list of our amazing partners over the years</p>
            {/* Partners Slider */}
            <div className="w-full mx-auto px-[5%]">
              <PartnersSlider />
            </div>
          </div>
        </div>
      </div>

      <DreamJobBanner />
    </div>
  )
}

export default Homepage;
