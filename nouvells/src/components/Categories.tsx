import photographyIcon from '@/assets/homepage/categories/photography.svg';
import designIcon from '@/assets/homepage/categories/design.svg';
import developmentIcon from '@/assets/homepage/categories/development.svg';
import digitalMarketingIcon from '@/assets/homepage/categories/digitalmarketing.svg';
import videoandanimationIcon from '@/assets/homepage/categories/videoandanimation.svg';
import engineeringIcon from '@/assets/homepage/categories/engineering.svg';
import tutoringIcon from '@/assets/homepage/categories/tutoring.svg';

const categoriesData = [
    { iconPath: photographyIcon, label: 'Photography' },
    { iconPath: designIcon, label: 'Design' },
    { iconPath: developmentIcon, label: 'Development' },
    { iconPath: digitalMarketingIcon, label: 'Digital Marketing' },
    { iconPath: videoandanimationIcon, label: 'Video & Animation' },
    { iconPath: engineeringIcon, label: 'Engineering' },
    { iconPath: tutoringIcon, label: 'Tutoring' },
    { iconPath: tutoringIcon, label: 'Tutoring' },
    { iconPath: tutoringIcon, label: 'Tutoring' },
];

const Categories = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-medium mb-8">Browse Categories</h2>
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categoriesData.map((categoryData, index) => (
                        <CategoryCard key={index} categoryData={categoryData} />
                    ))}
                </div>
            </div>
        </>
    );
}

const CategoryCard = ({ categoryData }: { categoryData: { iconPath: string, label: string } }) => {
    const { iconPath, label } = categoryData;

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={iconPath} alt={label} className="h-52 w-52 mb-4" />
            <p className="text-center font-medium text-2xl text-[#212121]">{label}</p>
        </div>
    );
}

export default Categories;
