export function updateDomainTable(domains) {
    const tableBody = document.querySelector('.domain-table tbody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    domains.forEach(domain => {
        const row = createDomainRow(domain);
        tableBody.appendChild(row);
    });
}

function createDomainRow(domain) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${domain.name}</td>
        <td>${formatDate(domain.registration_date)}</td>
        <td>${formatDate(domain.expiry_date)}</td>
        <td><span class="domain-status status-${domain.status.toLowerCase()}">${domain.status}</span></td>
        <td>
            <div class="domain-actions">
                <button class="action-btn" title="Bearbeiten">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </button>
                <button class="action-btn" title="DNS verwalten">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </button>
                <button class="action-btn" title="Verlängern">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 2v6h-6"></path>
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                        <path d="M3 12a9 9 0 0 0 15 6.7L21 16"></path>
                        <path d="M21 22v-6h-6"></path>
                    </svg>
                </button>
            </div>
        </td>
    `;
    return row;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE');
}

