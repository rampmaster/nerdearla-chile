// End-to-End tests for the Photo Submission Application

describe('Photo Submission E2E Tests', () => {
    test('Complete photo submission workflow', async () => {
        // Navigate to the photo submission page
        await page.goto('http://localhost:8080/photo-submission-ui/index.html');

        // Select a photo to submit
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('#photoInput'), // some button that triggers file selection
        ]);
        await fileChooser.accept(['path/to/photo.jpg']);

        // Submit the photo
        await Promise.all([
            page.waitForNavigation(), // wait for the next page to load
            page.click('button[type="submit"]'),
        ]);

        // Check for successful submission message
        await expect(page).toMatch('Photo submitted successfully!');
    });
});
