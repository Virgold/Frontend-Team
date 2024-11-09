import { JOB_DISPLAY_COUNT } from "@/constants";
import { useCallback, useEffect, useState } from "react";

export const useDisplayCount = () => {
    const getInitialCount = useCallback(() => {
        if (typeof window === 'undefined') return JOB_DISPLAY_COUNT.small;
        return window.innerWidth >= 1024
            ? JOB_DISPLAY_COUNT.large
            : window.innerWidth >= 768
                ? JOB_DISPLAY_COUNT.tablet
                : JOB_DISPLAY_COUNT.small;
    }, []);

    const [displayCount, setDisplayCount] = useState(getInitialCount());

    useEffect(() => {
        const handleResize = () => setDisplayCount(getInitialCount());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getInitialCount]);

    return [displayCount, setDisplayCount] as const;
};
