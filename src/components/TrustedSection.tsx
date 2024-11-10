import personOne from '@/assets/homepage/Ellipse 1.svg'
import personTwo from '@/assets/homepage/Ellipse 2.svg'
import personThree from '@/assets/homepage/Ellipse 3.svg'
import personFour from '@/assets/homepage/Ellipse 4.svg'
import personFive from '@/assets/homepage/Ellipse 5.svg'
import personSix from '@/assets/homepage/Ellipse 6.svg'

const TrustedSection = () => {
    const images = [
        personOne, personTwo, personThree, personFour, personFive, personSix
    ];

    return (
        <div className="container">
            <div className="sub-container flex flex-col items-center">
                <h2 className="text-xl font-medium text-gray-800">
                    Trusted by over <span className="font-bold">5000+</span> Employers and Employees.
                </h2>

                <div className="flex items-center">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Person ${index + 1}`}
                            className="w-16 h-16 rounded-full border-0 border-white object-cover -ml-4 first:ml-0 shadow-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedSection;
