// Job status enum for better type safety and consistency
const JOB_STATUS = {
    OPEN: 'open',
    CLOSED: 'closed',
    IN_PROGRESS: 'in_progress'
};

// Employment types for consistency
const EMPLOYMENT_TYPES = {
    FULL_TIME: 'full_time',
    CONTRACT: 'contract',
    FREELANCE: 'freelance',
    PART_TIME: 'part_time'
};

// Main jobs data
const jobs = {
    categories: CATEGORIES,
    total_jobs: 150,
    last_updated: "2024-11-09T10:00:00Z",
    jobs: [
        {
            id: "job_001",
            title: "UI/UX Designer",
            company: "Odeyor Pay",
            category: "Graphics & Design",
            sub_category: "UI/UX Design",
            budget: 400,
            currency: "USD",
            description: "Looking for a UI/UX designer to develop our app and mobile app...",
            requirements: [
                "3+ years of experience in UI/UX design",
                "Proficiency in Figma or Adobe XD",
                "Portfolio of previous work",
                "Experience with mobile app design"
            ],
            skills: ["UI Design", "UX Design", "Figma", "Mobile Design", "Prototyping"],
            employment_type: EMPLOYMENT_TYPES.CONTRACT,
            location: {
                type: "remote",
                timezone: "UTC-5"
            },
            status: JOB_STATUS.OPEN,
            posted_date: "2024-11-08T15:30:00Z",
            application_deadline: "2024-11-30T23:59:59Z",
            applications_count: 12
        },
        {
            id: "job_002",
            title: "Product Designer",
            company: "TechCorp",
            category: "Graphics & Design",
            sub_category: "Product Design",
            budget: 500,
            currency: "USD",
            description: "Seeking a product designer to help with our SaaS platform...",
            requirements: [
                "5+ years of product design experience",
                "Experience with SaaS products",
                "Strong portfolio"
            ],
            skills: ["Product Design", "UI Design", "UX Research", "Design Systems"],
            employment_type: EMPLOYMENT_TYPES.FULL_TIME,
            location: {
                type: "hybrid",
                city: "San Francisco",
                country: "USA",
                timezone: "UTC-8"
            },
            status: JOB_STATUS.OPEN,
            posted_date: "2024-11-07T09:00:00Z",
            application_deadline: "2024-11-25T23:59:59Z",
            applications_count: 8
        }
    ]
};
