# Developer Documentation for Photo Submission Application

## Overview

This document provides an overview of the Photo Submission Application, detailing the codebase, APIs, and external dependencies. The application allows users to submit photos to a specified issue within a GitHub repository.

## Codebase Structure

- `photo-submission-ui/`: Contains the user interface files including HTML, CSS, and JavaScript files for the photo submission feature.
  - `index.html`: The main HTML file for the application UI.
  - `style.css`: Contains styling for the application UI.
  - `script.js`: Handles the functionality of the photo submission process.
- `integration/`: Contains files for integration with external services.
  - `github-api.js`: Manages the integration with the GitHub API for submitting photos to an issue.
- `tests/`: Contains test files for the application.
  - `unit-tests.js`: Performs unit testing on application components.
  - `integration-tests.js`: Conducts integration testing with the GitHub API.
  - `e2e-tests.js`: Contains end-to-end tests to validate the complete workflow of the application, including UI interactions and API integrations.

## APIs

### GitHub API Integration

The application integrates with the GitHub API to submit photos to a specified issue. The `github-api.js` file in the `integration/` directory handles this process. It uses the GitHub API to create a comment in the specified issue with the photo attached.

## External Dependencies

- **Fetch API**: Used for making network requests to the GitHub API.
- **FormData API**: Utilized for handling form data submission, including file uploads.

## Setup and Installation

1. Clone the repository to your local machine.
2. Navigate to the `photo-submission-app/` directory.
3. To serve the application locally, you will need Node.js and npm installed on your machine. If you do not have them installed, please visit [Node.js](https://nodejs.org/) to download and install them.
4. Install `http-server` by running `npm install -g http-server` in your terminal.
5. Navigate to the `photo-submission-app/photo-submission-ui/` directory and run `http-server` in your terminal.
6. Open your web browser and go to `http://localhost:8080` to view the application.

## Testing

Refer to the `tests/` directory for unit, integration, and end-to-end (E2E) testing scripts. 

### Running Unit and Integration Tests

Run these tests to ensure the application components and GitHub API integration work as expected.

### Running End-to-End (E2E) Tests

End-to-end tests can be run to validate the complete workflow of the application, including UI interactions and API integrations. To run the E2E tests, navigate to the `photo-submission-app/tests/` directory and execute the following command:

```
npm run test:e2e
```

## Contribution Guidelines

Contributors are welcome to improve the application. Please follow these guidelines:
- Fork the repository.
- Create a new branch for your changes.
- Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
