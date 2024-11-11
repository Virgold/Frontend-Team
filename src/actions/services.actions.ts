import SERVICES from '@/../data/services.json';

export const getservices = async (serviceIndex: number) => {
    if (serviceIndex) {
        const filteredservices = SERVICES.filter((_, index) => index === serviceIndex);
        return filteredservices;
    }

    return SERVICES;
}
