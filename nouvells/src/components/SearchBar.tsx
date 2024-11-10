import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        alert('hhh')
        if (value.trim()) {
            navigate(`/jobs?query=${encodeURIComponent(value)}`);
        } else {
            alert("Please enter a search term.");
        }
    };

    return (
        <div className="w-full max-w-md md:max-w-3xl mx-auto mb-6 md:mb-8 px-4 md:px-0">
            <div className="w-full flex items-center gap-2 md:gap-3 bg-secondary shadow px-4 py-2 md:px-6 md:py-3 rounded-full">

                <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center bg-black rounded-full shrink-0">
                    <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                </div>

                <input
                    type="text"
                    placeholder="Job, Category, Keyword, Company"
                    className="flex-1 px-2 py-2 md:px-4 md:py-2.5 border-none bg-transparent rounded-md placeholder:text-gray-500 focus:outline-none text-gray-900 text-sm md:text-base"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />

                <button
                    onClick={handleSearch}
                    className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-[#2D63D1] hover:bg-[#2454b2] text-white font-medium transition-colors text-sm md:text-base whitespace-nowrap"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
