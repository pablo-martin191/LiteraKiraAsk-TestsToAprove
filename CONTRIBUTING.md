# Contributing to Kira Ask UI

Thank you for considering contributing to Kira Ask! This document provides tips and guidelines for contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Project Setup](#project-setup)
  - [Development Environment](#development-environment)
- [Development Workflow](#development-workflow)
  - [Branching Strategy](#branching-strategy)
  - [Commit Guidelines](#commit-guidelines)
  - [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
  - [JavaScript/TypeScript](#javascripttypescript)
  - [React Components](#react-components)
  - [Redux](#redux)
- [Testing](#testing)
- [Documentation](#documentation)
- [Bug Reports and Feature Requests](#bug-reports-and-feature-requests)

## Getting Started

### Project Setup

1. Clone the project:
   ```bash
   git clone https://github.com/Litera-Dev/Litera.KiraAsk.UI.git
   cd Litera.KiraAsk.UI
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm start
   ```

### Development Environment

- Node.js (version 16.x or higher)
- npm (version 7.x or higher)
- A modern code editor with ESLint and Prettier integration

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- Feature branches - Named as `feature/your-feature-name`
- Bug fix branches - Named as `fix/issue-description`

Always create your working branches from `main`:

```bash
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
```

### Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code changes that neither fix bugs nor add features
- `perf:` - Performance improvements
- `test:` - Adding or correcting tests
- `chore:` - Changes to the build process or auxiliary tools

Example:

```
feat: add question merging strategy to prevent data loss
```

### Pull Request Process

1. Update your feature branch with the latest changes from `main`
2. Ensure your code passes all tests and linting
3. Submit a pull request to the `main` branch
4. Include a clear description of the changes and any relevant issue numbers
5. Wait for code review and address any feedback
6. Once approved, your PR will be merged

## Coding Standards

### JavaScript/TypeScript

- Use TypeScript for all new code
- Follow the existing project's TypeScript configuration
- Use ES6+ features where appropriate
- Document complex functions with JSDoc comments

### React Components

- Use functional components with hooks instead of class components
- Keep components small and focused on a single responsibility
- Use proper prop types or TypeScript interfaces for component props
- Follow the project's existing component structure

### Redux

- Follow the Redux Toolkit patterns for all Redux code
- Prioritize RTK Query (createApi) for data fetching and state management
- Only use createSlice for complex state that can't be handled by RTK Query
- Implement proper error handling in async thunks and queries
- Avoid direct state mutations (except within createSlice reducers)
- Implement defensive programming with null/undefined checks

## Documentation

- Update documentation for any changed functionality
- Document complex algorithms or business logic
- Include comments explaining "why" rather than "what" when appropriate
- Keep README and other documentation up to date
