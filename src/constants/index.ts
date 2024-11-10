import { ThemeProviderState } from "@/components/theme/theme-provider";

export const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

export const NAVLINKS = [
    { href: '/jobs', label: 'Jobs' },
    { href: '/#coming-soon', label: 'Company' },
    { href: '/services', label: 'Services' },
    { href: '/#coming-soon', label: 'Pricing' }
];

export const JOB_CATEGORIES = [
    'All Jobs',
    'Graphics & Design',
    'Programming & Tech',
    'Development',
    'Digital Marketing',
    'IT & Consultancy',
    'Business',
    'Lifestyle',
    'Writing',
    'Music & Audio',
    'Video & Animation',
];

export enum JOB_DISPLAY_COUNT {
    large = 9,
    tablet = 6,
    small = 3
}
