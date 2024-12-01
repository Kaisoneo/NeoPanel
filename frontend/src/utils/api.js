const API_BASE_URL = 'http://localhost:5000/api';

async function fetchData(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function postData(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

const api = {
    getServers: () => fetchData('/servers'),
    getDomains: () => fetchData('/domains'),
    getUserProfile: () => fetchData('/users'),
    updateUserProfile: (data) => postData('/users', data),
};

