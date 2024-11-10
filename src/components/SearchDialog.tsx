import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';

import siteContent from '@/../data/sitecontent.json';

interface SearchResult {
    path: string;
    title: string;
    description: string;
    preview: string;
    score: number;
}

const SearchDialog = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const navigate = useNavigate();

    // Calculate search results
    const performSearch = useCallback((searchQuery: string) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        const searchTerms = searchQuery.toLowerCase().split(' ').filter(Boolean);

        const searchResults: SearchResult[] = Object.entries(siteContent)
            .map(([path, data]) => {
                const searchableText = `${data.title} ${data.content} ${data.keywords.join(' ')} ${data.description}`.toLowerCase();

                let score = 0;
                searchTerms.forEach(term => {
                    if (data.title.toLowerCase().includes(term)) score += 10;
                    if (data.keywords.some(k => k.toLowerCase().includes(term))) score += 8;
                    if (data.headings.some(h => h.toLowerCase().includes(term))) score += 6;
                    if (data.description.toLowerCase().includes(term)) score += 4;
                    if (searchableText.includes(term)) score += 2;
                });

                return {
                    path,
                    title: data.title,
                    description: data.description,
                    preview: data.content.slice(0, 150) + '...',
                    score
                };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);

        setResults(searchResults);
    }, []);

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Reset state when dialog closes
    useEffect(() => {
        if (!open) {
            setQuery('');
            setResults([]);
        }
    }, [open]);

    // Handle result selection
    const handleSelect = (result: SearchResult) => {
        setOpen(false);
        navigate(result.path);
    };

    return (
        <>
            <Button
                variant="outline"
                className="w-full md:w-40 lg:w-64 justify-start text-sm text-muted-foreground relative"
                onClick={() => setOpen(true)}
            >
                <Search className="lg:mr-2 h-4 w-4" />
                <span className="hidden lg:inline-flex">Nouvells...</span>
                {/* <span className="inline-flex lg:hidden">Search</span> */}
                <kbd className="absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    ⌘K
                </kbd>
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-2xl h-screen sm:h-auto">
                    <DialogHeader>
                        <DialogTitle className="sr-only">Search</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center border-b pb-4">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <Input
                            placeholder="Type to search..."
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                performSearch(e.target.value);
                            }}
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <Button
                            variant="ghost"
                            size="sm"
                            className="ml-2 h-6 w-6 p-0"
                            onClick={() => setOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <ScrollArea className="max-h-[50vh] overflow-y-auto mt-4">
                        {results.length > 0 ? (
                            <div className="space-y-2">
                                {results.map((result) => (
                                    <button
                                        key={result.path}
                                        onClick={() => handleSelect(result)}
                                        className="w-full text-left px-4 py-2 hover:bg-accent rounded-md transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium">{result.title}</h3>
                                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {result.preview}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        ) : query && (
                            <p className="text-sm text-center text-muted-foreground py-6">
                                No results found for "{query}"
                            </p>
                        )}
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default SearchDialog;
