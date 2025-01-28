interface Service {
    icon?: string;
    title: string;
    description: string
}

interface SectionCardProps {
    className?: string;
    title: string;
    description: string[];
    buttonText?: string;
    buttonLink?: string;
}
