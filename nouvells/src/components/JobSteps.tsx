import createAccountImage from '@/assets/homepage/job-card/card-1.png';
import verifyAccountImage from '@/assets/homepage/job-card/card-2.svg';
import applyJobImage from '@/assets/homepage/job-card/card-3.svg';
import allJobsImage from '@/assets/homepage/job-card/card-4.svg';
import { Link } from 'react-router-dom';

const cardsDetails = [
    {
        imagePath: createAccountImage,
        label: 'Create Account',
        text: 'Create an account to smoothen and enhance your job search experience',
        alt: 'Create Account Image',
    },
    {
        imagePath: verifyAccountImage,
        label: 'Verify Your Account',
        text: 'Only verified accounts are visible to hiring managers and trusted enough to be given jobs.',
        alt: 'Verify Account Image',
    },
    {
        imagePath: applyJobImage,
        label: 'Apply for Your Dream Job',
        text: 'Apply for your dream job at any point in time.',
        alt: 'Apply for Job Image',
    },
    {
        imagePath: allJobsImage,
        label: 'All Job Listings Available',
        text: 'Any kind of job you can think of is available on this platform.',
        alt: 'All Jobs Image',
    },
];

const JobSteps = () => {
    return (
        <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {cardsDetails.map(({ imagePath, label, text, alt }, index) => (
                    <JobStepCard key={index} imagePath={imagePath} label={label} text={text} alt={alt} />
                ))}
            </div>
        </div>
    );
};

const JobStepCard = ({ imagePath, label, text, alt }: { imagePath: string, label: string, text: string, alt?: string }) => {
    return (
        <Link to={'/under-construction'}>
            <div className="flex flex-col items-center bg-accent rounded-lg py-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-4 w-full flex items-center justify-center">
                    <img
                        src={imagePath}
                        alt={alt || 'Job steps guide card'}
                        className="w-96 h-96 object-contain"
                    />
                </div>
                <div className='w-full text-left px-[5%]'>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">{label}</h3>
                    <p className="text-[#5B5B5B]">{text}</p>
                </div>
            </div>
        </Link>
    );
};

export default JobSteps;
