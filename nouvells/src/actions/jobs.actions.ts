import jobs from '@/../data/jobs.json';

export const getJobs = async (categoryIndex: number) => {
    if (categoryIndex) {
        const filteredJobs = jobs.filter((job, index) => index === categoryIndex);
        return filteredJobs;
    }

    return jobs;
}

// export const getJobs = async () => {
//     return jobs;
// }
