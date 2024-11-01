import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchBar = () => {

    const [value, setValue] = useState('');

    return (
        <div className="w-full max-w-3xl mx-auto mb-8">
            <div className="flex items-center gap-3 bg-secondary shadow px-6 py-3  rounded-[5rem]">
               
                <div className=" h-10 w-10 flex items-center justify-center  bg-black rounded-full shrink-0">
                    <Search className="h-5 w-5 text-gray-500" />
                </div>

                <input
                    type="text"
                    placeholder="Job, Category, Keyword, Company"
                    className=" flex-1 px-4 py-2.5 border-none bg-transparent rounded-md placeholder:text-gray-500 focus:outline-none text-gray-900"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <button className="px-6 py-2.5 rounded-3xl bg-[#2D63D1] hover:bg-[#2454b2]  text-white font-medium transition-colors whitespace-nowrap">
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
