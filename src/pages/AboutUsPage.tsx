import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ServiceIcon } from '@/components/ServicesList';
import { getColorFromString } from '@/lib/utils';
import ContactForm from '@/components/ui/ContactForm';

// const SectionCard = ({ className, title, description, buttonText, buttonLink }: { className?: string, title: string, description: [string, string], buttonText: string, buttonLink: string }) => {
//     return (
//         <div className={cn(`w-full text-center bg-red-60 py-8`, className)}>
//             <h2 className="font-medium text-2xl lg:text-4xl text-gray-800 mb-6">{title}</h2>
//             {description.map((paragraph, index) => (
//                 <p
//                     key={index}
//                     className="text-lg text-gray-600 px-28 mx-auto mb-6"
//                 >
//                     {paragraph}
//                 </p>
//             ))}
//             <Link
//                 to={buttonLink}
//                 className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
//             >
//                 {buttonText}
//             </Link>
//         </div>
//     );
// };

const SectionCard: React.FC<SectionCardProps> = ({
    className,
    title,
    description,
    buttonText,
    buttonLink,
}) => {
    return (
        <div className={`flex flex-col justify-around p-8 ${className}`}>
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>

            {/* Description */}
            <div className="space-y-4">
                {description.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 text-base">
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Button */}
            <Link
                to={buttonLink}
                className="mt-6 inline-block text-center bg-blue-600 text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed justify-center duration-300"
            >
                {buttonText}
            </Link>
        </div>
    );
};


const FeatureCard = ({ className, title, description }: { className?: string, title: string, description: string }) => {
    const backgroundColor = getColorFromString(title + description + className);

    return (
        <Card className={`w-full py-7 flex flex-col items-center justify-between max-w-sm flex-grow basis-[300px] outline-none border-none bg-secondary/100 rounded-3xl hover:shadow-lg transition-shadow ${backgroundColor} bg-opacity-5`}>
            <ServiceIcon title={title} backgroundColor={backgroundColor} />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg">{description}</p>
            </CardContent>
        </Card >
    )
}

// const ContactInfo = () => (
//     <div className="flex flex-col space-y-4 max-w-md mx-auto mb-8">
//         {[
//             { icon: '📍', text: 'Uyo, Akwa Ibom 520101, Nigeria' },
//             { icon: '📧', text: 'info@nouvells.com' },
//             { icon: '📞', text: '+1 (123) 456-7890' }
//         ].map(({ icon, text }, index) => (
//             <p key={index} className="text-lg text-gray-600">
//                 {icon} {text}
//             </p>
//         ))}
//     </div>
// );

const AboutUsPage: React.FC = () => {
    return (
        <>
            <Hero page="about" />
            <section className="container mx-auto px-4 py-12">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                        <SectionCard
                            className="bg-[#f9fdf3] rounded-3xl flex flex-col space-between"
                            title="Who We Are"
                            description={[
                                "At Nouvells, we are dedicated to connecting businesses with the top 1% of experts who possess unparalleled knowledge and insights.",
                                "Our mission is to empower businesses by providing access to the best minds in the industry, driving innovation, and fostering growth.",
                                "Join us on this journey to transform the way businesses and experts connect.",
                                "Together, we can achieve greatness."
                            ]}
                            buttonText="Learn More"
                            buttonLink="/services"
                        />
                        <div className="w-full text-center py-8 bg-[#EDEDED] rounded-3xl">
                            <h2 className="font-medium text-2xl lg:text-4xl text-gray-800 mb-6">Contact Us</h2>
                            <ContactForm />
                        </div>
                    </div>

                    <div className="w-full text-center my-24">
                        <h2 className="font-medium text-2xl lg:text-4xl text-gray-800 mb-6">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {[
                                {
                                    className: "bg-[#fbf6ff]",
                                    title: "Elite Network",
                                    description: "Access the top 1% of experts in your industry, carefully curated to meet your needs."
                                },
                                {
                                    className: 'bg-[#f7f7ff]',
                                    title: "Seamless Process",
                                    description: "Our platform simplifies hiring and job searching, saving you time and effort."
                                },
                                {
                                    className: 'bg-[#f9fdf3]',
                                    title: "Commitment to Success",
                                    description: "We are dedicated to driving your business or career forward with unmatched expertise."
                                }
                            ].map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
                                    className={feature.className}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                        <SectionCard
                            className='bg-[#F0F0F0] rounded-3xl'
                            title="Our Culture"
                            description={[
                                "At Nouvells, we embrace a remote work culture, offering our team the flexibility to work from anywhere.",
                                "We understand the importance of flexibility and work-life balance. Our Remote Workplace Policy ensures our employees can thrive both professionally and personally."
                            ]}
                            buttonText="Join Our Team"
                            buttonLink="/careers"
                        />

                        <SectionCard
                            className='bg-[#f7f7ff] rounded-3xl'
                            title="Our Story"
                            description={[
                                "Founded in 2023, Nouvells was born out of a vision to revolutionize how businesses and experts connect.",
                                "From our humble beginnings, we have grown into a trusted platform for businesses and professionals alike, driven by innovation and a commitment to excellence."
                            ]}
                            buttonText="Read More"
                            buttonLink="/about"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;
