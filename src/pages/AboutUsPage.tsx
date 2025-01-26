import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';

const SectionCard = ({ title, description, buttonText, buttonLink }: { title: string, description: [string, string], buttonText: string, buttonLink: string }) => (
    <div className="w-full mb-16 text-center">
        <h2 className="font-medium text-2xl lg:text-4xl text-gray-800 mb-6">{title}</h2>
        {description.map((paragraph, index) => (
            <p
                key={index}
                className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
            >
                {paragraph}
            </p>
        ))}
        <Link
            to={buttonLink}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
            {buttonText}
        </Link>
    </div>
);

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-xl text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ContactInfo = () => (
    <div className="flex flex-col space-y-4 max-w-md mx-auto mb-8">
        {[
            { icon: '📍', text: 'Uyo, Akwa Ibom 520101, Nigeria' },
            { icon: '📧', text: 'info@nouvells.com' },
            { icon: '📞', text: '+1 (123) 456-7890' }
        ].map(({ icon, text }, index) => (
            <p key={index} className="text-lg text-gray-600">
                {icon} {text}
            </p>
        ))}
    </div>
);

const AboutUsPage: React.FC = () => {
    return (
        <>
            <Hero page="about" />
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <SectionCard
                        title="Who We Are"
                        description={[
                            "At Nouvells, we are dedicated to connecting businesses with the top 1% of experts who possess unparalleled knowledge and insights.",
                            "Our mission is to empower businesses by providing access to the best minds in the industry, driving innovation, and fostering growth."
                        ]}
                        buttonText="Learn More"
                        buttonLink="/services"
                    />

                    <div className="w-full mb-16 text-center">
                        <h2 className="font-medium text-2xl lg:text-4xl text-gray-800 mb-6">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {[
                                {
                                    title: "Elite Network",
                                    description: "Access the top 1% of experts in your industry, carefully curated to meet your needs."
                                },
                                {
                                    title: "Seamless Process",
                                    description: "Our platform simplifies hiring and job searching, saving you time and effort."
                                },
                                {
                                    title: "Commitment to Success",
                                    description: "We are dedicated to driving your business or career forward with unmatched expertise."
                                }
                            ].map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                        <Link
                            to="/services"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
                        >
                            Get Started
                        </Link>
                    </div>

                    <SectionCard
                        title="Our Culture"
                        description={[
                            "At Nouvells, we embrace a remote work culture, offering our team the flexibility to work from anywhere.",
                            "We understand the importance of flexibility and work-life balance. Our Remote Workplace Policy ensures our employees can thrive both professionally and personally."
                        ]}
                        buttonText="Join Our Team"
                        buttonLink="/careers"
                    />

                    <SectionCard
                        title="Our Story"
                        description={[
                            "Founded in 2023, Nouvells was born out of a vision to revolutionize how businesses and experts connect.",
                            "From our humble beginnings, we have grown into a trusted platform for businesses and professionals alike, driven by innovation and a commitment to excellence."
                        ]}
                        buttonText="Read More"
                        buttonLink="/about"
                    />

                    <div className="w-full mb-16 text-center">
                        <h2 className="font-medium text-2xl lg:text-4xl text-gray-800 mb-6">Contact Us</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                            Have questions or want to learn more about how Nouvells can help you? Get in touch with us today!
                        </p>
                        <ContactInfo />
                        <Link
                            to="/contact"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;
