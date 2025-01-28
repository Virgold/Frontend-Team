import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as Icons from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalize = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const generateHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 7) ^ (hash >> 3) ^ char;
    hash = Math.abs(hash * 31 + char);
  }
  return hash;
};

export const getColorFromString = (str: string) => {
  const colors = [
    'bg-blue-500',      // Bold blue
    'bg-green-500',     // Vibrant green
    'bg-purple-500',    // Rich purple
    'bg-pink-500',      // Bright pink
    'bg-indigo-500',    // Deep indigo
    'bg-teal-500',      // Distinct teal
    'bg-cyan-500',      // Light cyan
    'bg-orange-500',    // Bold orange
    'bg-yellow-500',    // Bright yellow
    'bg-red-500',       // Strong red
    'bg-lime-500',      // Light lime green
    'bg-amber-500',     // Warm amber
    'bg-emerald-500',   // Soft emerald green
    'bg-fuchsia-500',   // Vivid fuchsia
    'bg-sky-500',       // Light sky blue
    'bg-rose-500'       // Soft rose
  ];

  const hash = generateHash(str);
  return colors[hash % colors.length];
};

export const getIconFromString = (str: string) => {
  const iconNames = [
    'Boxes',
    'Building',
    'Code',
    'Coffee',
    'Database',
    'FileText',
    'Globe',
    'Heart',
    'Layout',
    'MessageCircle',
    'Phone',
    'Search',
    'Settings',
    'Shield',
    'Star',
    'Users'
  ] as const;

  const hash = generateHash(str);

  const iconName = iconNames[hash % iconNames.length];
  return Icons[iconName];
};
