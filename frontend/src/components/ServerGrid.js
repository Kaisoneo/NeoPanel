export function updateServerGrid(servers) {
    const serverGrid = document.querySelector('.server-grid');
    if (!serverGrid) return;

    serverGrid.innerHTML = '';
    servers.forEach(server => {
        const serverCard = createServerCard(server);
        serverGrid.appendChild(serverCard);
    });
}

function createServerCard(server) {
    const card = document.createElement('div');
    card.className = 'server-card';
    card.innerHTML = `
        <div class="server-header">
            <h3 class="server-name">${server.name}</h3>
            <span class="server-status status-${server.status.toLowerCase()}">${server.status}</span>
        </div>
        <div class="server-stats">
            <div class="stat-item">
                <div class="stat-label">CPU-Auslastung</div>
                <div class="stat-value">${server.cpu_usage}%</div>
                <div class="progress-bar">
                    <div class="progress-fill progress-fill-cpu" style="width: ${server.cpu_usage}%"></div>
                </div>
            </div>
            <div class="stat-item">
                <div class="stat-label">RAM</div>
                <div class="stat-value">${server.ram_usage}%</div>
                <div class="progress-bar">
                    <div class="progress-fill progress-fill-ram" style="width: ${server.ram_usage}%"></div>
                </div>
            </div>
            <div class="stat-item full-width">
                <div class="stat-label">SSD-Speicher</div>
                <div class="stat-value">${server.storage_usage}%</div>
                <div class="progress-bar">
                    <div class="progress-fill progress-fill-ssd" style="width: ${server.storage_usage}%"></div>
                </div>
            </div>
        </div>
    `;
    return card;
}

