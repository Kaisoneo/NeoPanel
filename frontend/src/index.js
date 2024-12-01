import { api } from './utils/api.js';
import { updateServerGrid } from './components/ServerGrid.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const servers = await api.getServers();
        updateServerGrid(servers);
    } catch (error) {
        console.error('Error fetching server data:', error);
    }
});

