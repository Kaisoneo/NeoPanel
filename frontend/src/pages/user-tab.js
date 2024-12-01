import { api } from '../utils/api.js';
import { populateUserForm, handleFormSubmit } from '../components/UserForm.js';

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

