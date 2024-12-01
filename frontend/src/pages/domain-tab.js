import { api } from '../utils/api.js';
import { updateDomainTable } from '../components/DomainTable.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const domains = await api.getDomains();
        updateDomainTable(domains);
    } catch (error) {
        console.error('Error fetching domain data:', error);
    }
});

