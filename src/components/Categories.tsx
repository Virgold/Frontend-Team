import photographyIcon from '@/assets/homepage/categories/photography.svg';
import designIcon from '@/assets/homepage/categories/design.svg';
import developmentIcon from '@/assets/homepage/categories/development.svg';
import digitalMarketingIcon from '@/assets/homepage/categories/digitalmarketing.svg';
import videoandanimationIcon from '@/assets/homepage/categories/videoandanimation.svg';
import engineeringIcon from '@/assets/homepage/categories/engineering.svg';
import tutoringIcon from '@/assets/homepage/categories/tutoring.svg';
import { Link } from 'react-router-dom';

const categoriesData = [
    { iconPath: photographyIcon, label: 'Photography' },
    { iconPath: designIcon, label: 'Design' },
    { iconPath: developmentIcon, label: 'Development' },
    { iconPath: digitalMarketingIcon, label: 'Digital Marketing' },
    { iconPath: videoandanimationIcon, label: 'Video & Animation' },
    { iconPath: engineeringIcon, label: 'Engineering' },
    { iconPath: tutoringIcon, label: 'Tutoring' },
];

const Categories = () => {
    return (
        <section className='container'>
            <div className="sub-container">
                <h2 className="text-center text-3xl lg:text-4xl font-medium mb-8">Browse Categories</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {categoriesData.map((categoryData, index) => (
                        <CategoryCard key={index} categoryData={categoryData} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const CategoryCard = ({ categoryData }: { categoryData: { iconPath: string, label: string } }) => {
    const { iconPath, label } = categoryData;

    return (
     

        <Link to={`/jobs/?query=${label.toLowerCase()}`} className="py-4 flex flex-col items-center justify-center w-full max-w-sm flex-grow basis-[300px] outline-none border-none bg-background rounded-3xl shadow-2xl hover:shadow-lg transition-shadow">
            <img src={iconPath} alt={label} className="h-52 w-52 mb-4" />
            <p className="text-center font-medium text-2xl text-[#212121]">{label}</p>
        </Link>
    );
}

export default Categories;
