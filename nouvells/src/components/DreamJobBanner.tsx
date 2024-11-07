import { Button } from "@/components/ui/button";
import personImage from '@/assets/homepage/happyGirl.svg'
import bgPattern from '@/assets/homepage/job-pattern-bg.svg'

const DreamJobBanner = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="container">
                <div className="sub-container">
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${bgPattern})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center', opacity: 0.2
                        }} ></div>
                    <div className="w-full relative z-10 flex items-center justify-between bg-primary rounded-3xl">
                        <div className="text-white space-y-4 max-w p-4">
                            <h4 className="text-3xl md:text-4xl font-semibold">
                                Find Your Dream Jobs In No Time.
                            </h4>
                            <p className="text-base md:text-lg md:w-2/3">
                                Explore Opportunities, Build Connections, and Advance Your Career with Nouvelles. Sign up or Create an account now to get started.
                            </p>
                            <Button className="mt-4 px-6 py-2 bg-transparent border border-white text-white rounded-3xl hover:bg-white hover:text-blue-500 transition-colors">Get Started
                                <svg
                                    className="ml-2 w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </div>

                        <div className="hidden md:block">
                            <img src={personImage} alt="Happy person" className="rounded-lg w-full min-w-64" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DreamJobBanner;
