// Unit tests for the Photo Submission Application components

describe('Photo Submission UI Tests', () => {
    test('Form should exist in the document', () => {
        expect(document.getElementById('photoSubmissionForm')).not.toBeNull();
    });

    test('Photo input should accept only images', () => {
        const photoInput = document.getElementById('photoInput');
        expect(photoInput.getAttribute('accept')).toBe('image/*');
    });
});

describe('GitHub API Integration Tests', () => {
    test('submitPhotoToIssue function should return success message on successful submission', async () => {
        const response = await submitPhotoToIssue('fakeIssueUrl', new Blob(), 'fakeToken');
        expect(response.success).toBeTruthy();
        expect(response.message).toBe('Photo submitted successfully to issue.');
    });

    test('submitPhotoToIssue function should return error message on failure', async () => {
        const response = await submitPhotoToIssue('fakeIssueUrl', new Blob(), 'fakeToken');
        expect(response.success).toBeFalsy();
        expect(response.message).toBe('Failed to submit photo to issue');
    });
});
