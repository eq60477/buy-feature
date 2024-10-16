# Buy Component (React + Rspack + Rsbuild)

This is a React Microfrontend application for the Buy Feature. It uses Rspack and Rsbuild for building and bundling the application.

## Setup

To set up the project, you need to install the dependencies. Run the following command:

```bash
npm install
```

## Get Started

To start the development server, use the following command:

```bash
npm run dev
```

This will start the application in development mode, allowing you to see your changes in real-time.

## Build

To build the application for production, run:

```bash
npm run build
```

This will create an optimized production build of your application.

## Testing

### Component Tests

To run the React component tests, use:

```bash
npm run test:component
```

### Unit Tests

To run a specific test, use:

```bash
npm run test <filename>
```

This will execute the tests for your React components to ensure they are working as expected.

### End-to-End (E2E) Tests

To run the end-to-end tests with Playwright, use:

```bash
npm run preview
npm run test:e2e
```

This will run the E2E tests to verify the entire application flow.

## Preview

To preview the production build locally, run:

```bash
npm run preview
```

This will start a local server to serve the production build of your application, allowing you to test it as it would run in production.
