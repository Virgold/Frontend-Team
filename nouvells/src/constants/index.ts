import { ThemeProviderState } from "@/components/theme/theme-provider";

export const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

export const navLinks = [
    { href: '/jobs', label: 'Jobs' },
    { href: '/company', label: 'Company' },
    { href: '/services', label: 'Service' },
    { href: '/pricing', label: 'Pricing' }
];
