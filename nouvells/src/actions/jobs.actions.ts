import jobs from '@/../data/jobs.json';

export const getJobs = async (searchQuery?: string) => {
    if (searchQuery && searchQuery !== 'all jobs') {
        const filteredJobs = jobs.filter(job =>
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.sub_category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.skills.some(skill =>
                skill.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            job.requirements.some(requirement =>
                requirement.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.employment_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.location.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.status.toLowerCase().includes(searchQuery.toLowerCase())
        )
        return filteredJobs;
    }

    return jobs;
}
