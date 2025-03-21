# Productive Folder Structure

This repository demonstrates a modular folder structure using **features** with **`eslint-plugin-boundaries`** to enforce import/export boundaries between components. The structure is designed for **Next.js 15.2.3** and **does not include a `src` folder**.

## Folder Structure

- **`components/`**: Contains reusable components.
- **`features/`**: Contains project-specific functionality, organized by feature.
- **`app/`**: Holds the main application structure and entry points.

## ESLint Configuration

The ESLint configuration utilizes **`eslint-plugin-boundaries`** to define clear boundaries between different parts of the application. This ensures that elements within each folder type (shared, feature, app) adhere to the following rules:

- **Shared** components are allowed to import other **shared** components.
- **Feature** components can import **shared** and components from the same feature.
- **App** components can import **shared** and **feature** components but are restricted to importing **`*.css`** files.

## How to Use

1. Download the **`eslint.config.mjs`** release from this repository and add it to your project or copy it from this repository.

2. Test the ESLint configuration with the following command:
   ```bash
   npm run lint
   ```

For more information, read: [eslint-plugin-boundaries](https://www.npmjs.com/package/eslint-plugin-boundaries)
