// Integration tests for the Photo Submission Application with GitHub API

describe('GitHub API Integration Tests', () => {
    test('submitPhotoToIssue function should successfully submit a photo to a specified issue', async () => {
        // Mock the GitHub API response for successful photo submission
        const mockSuccessResponse = { success: true, message: 'Photo submitted successfully to issue.' };
        const issueUrl = 'https://api.github.com/repos/user/repo/issues/1/comments';
        const photoData = new Blob(['photo'], { type: 'image/jpeg' });
        const userToken = 'fakeToken';

        // Mock the fetch function to simulate GitHub API call
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockSuccessResponse),
            })
        );

        const response = await submitPhotoToIssue(issueUrl, photoData, userToken);
        expect(response).toEqual(mockSuccessResponse);
        expect(fetch).toHaveBeenCalledWith(issueUrl, expect.objectContaining({
            method: 'POST',
            body: expect.any(FormData),
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Accept': 'application/vnd.github.v3+json'
            },
        }));
    });

    test('submitPhotoToIssue function should handle failure in photo submission', async () => {
        // Mock the GitHub API response for failed photo submission
        const mockFailureResponse = { success: false, message: 'Failed to submit photo to issue' };
        const issueUrl = 'https://api.github.com/repos/user/repo/issues/1/comments';
        const photoData = new Blob(['photo'], { type: 'image/jpeg' });
        const userToken = 'fakeToken';

        // Mock the fetch function to simulate GitHub API call
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve(mockFailureResponse),
            })
        );

        const response = await submitPhotoToIssue(issueUrl, photoData, userToken);
        expect(response).toEqual(mockFailureResponse);
        expect(fetch).toHaveBeenCalledWith(issueUrl, expect.objectContaining({
            method: 'POST',
            body: expect.any(FormData),
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Accept': 'application/vnd.github.v3+json'
            },
        }));
    });
});
