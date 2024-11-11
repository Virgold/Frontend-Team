import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (value.trim()) {
            const searchParams = new URLSearchParams({
                query: value.trim(),
                scope: 'all'
            });
            navigate(`/jobs/?${searchParams.toString()}`);
        }
    };

    return (
        <div className="w-[94%] max-w-[560px] lg:max-w-2xl mx-auto mb-4 sm:mb-6">
            <div className="w-full flex items-center gap-2 bg-secondary/80 shadow-sm 
                    px-3 sm:px-4 py-2 rounded-full">
                <div className="h-8 w-8 flex items-center justify-center 
                      bg-black/90 rounded-full shrink-0">
                    <Search className="h-4 w-4 text-gray-400" />
                </div>

                <input
                    type="text"
                    placeholder="Job, Category, Keyword, Company"
                    className="flex-1 min-w-0
                    px-2 py-1.5
                    border-none bg-transparent 
                    placeholder:text-gray-500
                    focus:outline-none 
                    text-gray-900 
                    text-sm
                    placeholder:text-sm
                    truncate"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />

                <button
                    onClick={handleSearch}
                    className="px-4 py-1.5
                    rounded-full 
                    bg-[#2D63D1] hover:bg-[#2454b2] 
                    text-white font-medium 
                    text-sm
                    whitespace-nowrap
                    shrink-0"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
