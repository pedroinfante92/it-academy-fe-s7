# TMDB Project - React + TypeScript + Vite

This project is a web application built with React, TypeScript, and Vite, utilizing Tailwind CSS for styling and TanStack Query for data fetching. It also integrates with Supabase for backend services.

## Features

* **React 19:** Leverages the latest features of React for building user interfaces.
* **TypeScript:** Provides type safety and improves code maintainability.
* **Vite 7.x:** Offers a fast and efficient development experience with features like Hot Module Replacement (HMR).
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **TanStack Query:** Manages and caches asynchronous data in React applications.
* **Supabase:** Integrates with Supabase for backend services (e.g., database, authentication).
* **React Router DOM:** Handles client-side routing.
* **ESLint:** Configured with type-aware linting rules for code quality and consistency, including `eslint-plugin-react-x` and `eslint-plugin-react-dom` for React-specific best practices.

## Project Structure

* `public/`: Static assets.
* `src/`:
    * `main.tsx`: Entry point of the React application.
    * `App.tsx`: Main application component.
    * Other components, hooks, services, etc.
* `index.html`: Main HTML file.
* `vite.config.ts`: Vite configuration.
* `tsconfig.json`, `tsconfig.node.json`, `tsconfig.app.json`: TypeScript configurations.
* `eslint.config.js`: ESLint configuration.
* `package.json`: Project dependencies and scripts.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd it-academy-fe-s7
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev