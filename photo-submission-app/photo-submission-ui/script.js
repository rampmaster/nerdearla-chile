// JavaScript functionality for the Photo Submission UI

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('photoSubmissionForm');
    const photoInput = document.getElementById('photoInput');
    const submitButton = form.querySelector('button[type="submit"]');

    form.onsubmit = async function(event) {
        event.preventDefault();
        if (!photoInput.files.length) {
            alert('Please select a photo to submit.');
            return;
        }

        const file = photoInput.files[0];
        const formData = new FormData();
        formData.append('photo', file);

        try {
            // Secure photo upload to GitHub issue
            const response = await fetch('API_ENDPOINT', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': 'Bearer YOUR_GITHUB_TOKEN'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to submit photo');
            }

            alert('Photo submitted successfully!');
            form.reset();
        } catch (error) {
            console.error('Error submitting photo:', error);
            alert('Error submitting photo. Please try again.');
        }
    };
});
