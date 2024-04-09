// JavaScript file for GitHub API integration to facilitate photo submission to a specified issue

async function submitPhotoToIssue(issueUrl, photoData) {
    const userToken = process.env.GITHUB_TOKEN; // Retrieve userToken from environment variable
    const formData = new FormData();
    formData.append('photo', photoData);

    try {
        const response = await fetch(issueUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to submit photo to issue');
        }

        return { success: true, message: 'Photo submitted successfully to issue.' };
    } catch (error) {
        console.error('Error submitting photo to issue:', error);
        return { success: false, message: error.message };
    }
}
