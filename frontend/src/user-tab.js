document.addEventListener('DOMContentLoaded', async () => {
    try {
        const userProfile = await api.getUserProfile();
        populateUserForm(userProfile);
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }

    const form = document.querySelector('.profile-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

function populateUserForm(userProfile) {
    document.getElementById('name').value = userProfile.name || '';
    document.getElementById('email').value = userProfile.email || '';
    document.getElementById('alias').value = userProfile.alias || '';
    document.getElementById('description').value = userProfile.description || '';
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        alias: document.getElementById('alias').value,
        description: document.getElementById('description').value,
    };

    try {
        const response = await api.updateUserProfile(formData);
        alert('Profil erfolgreich aktualisiert');
    } catch (error) {
        console.error('Error updating user profile:', error);
        alert('Fehler beim Aktualisieren des Profils');
    }
}

