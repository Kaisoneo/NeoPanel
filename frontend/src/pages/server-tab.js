import { api } from '../utils/api.js';
import { updateServerTable } from '../components/ServerTable.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const servers = await api.getServers();
        updateServerTable(servers);
    } catch (error) {
        console.error('Error fetching server data:', error);
    }
});

