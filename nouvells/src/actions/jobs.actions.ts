import JOBS from '@/../data/jobs.json';

// const jobs = JSON.parse(JOBS);
import jobs from '@/../data/jobs.json';

export const getJobs = async (category: string) => {
    console.log(category);
    if (category) {
        const filteredJobs = jobs.filter(job => job.category === category);
        return filteredJobs;
    }

    return jobs;
}

// export const getJobs = async () => {
//     return jobs;
// }
