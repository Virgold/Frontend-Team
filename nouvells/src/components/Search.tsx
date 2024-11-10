import React, { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const SearchSite = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Replace this with your actual site content
    // You can import this from a separate file
    const siteContent = [
        {
            path: '/',
            title: 'Home',
            content: 'Welcome to our website. We offer amazing services.',
            keywords: ['home', 'welcome', 'main'],
        },
        {
            path: '/about',
            title: 'About Us',
            content: 'Learn about our company history and mission.',
            keywords: ['about', 'company', 'mission'],
        },
        // Add more pages here
    ];

    const searchContent = useCallback((searchQuery) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        const searchTerms = searchQuery.toLowerCase().split(' ');

        const searchResults = siteContent
            .map(page => {
                // Calculate relevance score
                let score = 0;
                const searchableText = `${page.title} ${page.content} ${page.keywords.join(' ')}`.toLowerCase();

                searchTerms.forEach(term => {
                    // Title matches worth more
                    if (page.title.toLowerCase().includes(term)) {
                        score += 3;
                    }
                    // Keyword matches worth more than content matches
                    if (page.keywords.some(keyword => keyword.toLowerCase().includes(term))) {
                        score += 2;
                    }
                    // Content matches
                    if (searchableText.includes(term)) {
                        score += 1;
                    }
                });

                return {
                    ...page,
                    score,
                    // Create a preview that highlights the context around the match
                    preview: searchTerms.reduce((acc, term) => {
                        const index = page.content.toLowerCase().indexOf(term);
                        if (index >= 0) {
                            const start = Math.max(0, index - 30);
                            const end = Math.min(page.content.length, index + term.length + 30);
                            return page.content.slice(start, end) + '...';
                        }
                        return acc;
                    }, page.content.slice(0, 100) + '...'),
                };
            })
            .filter(page => page.score > 0)
            .sort((a, b) => b.score - a.score);

        setResults(searchResults);
    }, []);

    const handleSearch = useCallback((value) => {
        setQuery(value);
        searchContent(value);
    }, [searchContent]);

    return (
        <>
            <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(true)}
            >
                <Search className="h-4 w-4" />
                Search
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
                    <div className="fixed left-[50%] top-[10%] z-50 grid w-full max-w-lg translate-x-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full">
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <Input
                                    autoFocus
                                    placeholder="Search..."
                                    value={query}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="pl-10"
                                />
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto">
                            {results.length > 0 ? (
                                <div className="space-y-4">
                                    {results.map((result, index) => (
                                        <Card key={index}>
                                            <CardContent className="p-4">
                                                <a
                                                    href={result.path}
                                                    className="block"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <h3 className="text-lg font-semibold mb-1 hover:text-primary">
                                                        {result.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {result.preview}
                                                    </p>
                                                </a>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            ) : query ? (
                                <p className="text-center text-muted-foreground py-8">
                                    No results found for "{query}"
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default SearchSite;
