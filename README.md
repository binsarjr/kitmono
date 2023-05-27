# Monorepo Template for Project with pnpm

This repository serves as a template for creating a monorepo project using [pnpm](https://pnpm.io/). It provides a convenient structure for managing multiple packages within a single repository.

It provides a structured setup for managing multiple packages and applications within a single repository. The included packages are `trpc-definition`, `tailwind-configuration`, `tsconfig`, and `ui`, while the apps are built using SvelteKit.

## Packages

### trpc-definition

This package contains the trpc definitions for your project. It defines the API endpoints, data models, and any other necessary definitions for your trpc server.

### tailwind-configuration

The `tailwind-configuration` package contains the configuration files and settings for Tailwind CSS in your project. You can customize the theme, add or modify utility classes, and manage your project's overall styling using this package.

### tsconfig

The `tsconfig` package contains the TypeScript configuration for your project. It includes compiler options, module resolution settings, and any other necessary configurations to ensure smooth TypeScript development across all packages in your monorepo.

### ui

The `ui` package houses the user interface components and related code for your project. This package serves as the frontend layer of your application, providing a cohesive and reusable set of UI components that can be used across different parts of your project.

## Getting Started

To get started with your monorepo project using this template, follow these steps:

1. Clone this repository: `git clone https://github.com/binsarjr/kitmono.git`.
2. Install pnpm globally: `npm install -g pnpm`.
3. Install dependencies for all packages: `pnpm install`.
4. Start the development server: `pnpm --filter kitmono.vercel.app dev`.

Feel free to customize and extend this template to fit your specific project requirements. Happy coding!



## License

This repository is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.



## Acknowledgments
We'd like to acknowledge the following tools and frameworks that made this template possible:

- pnpm
- SvelteKit
- Tailwind CSS
- TypeScript

Thank you for using our monorepo template! We hope it helps you build amazing projects efficiently and collaboratively. If you have any questions or feedback, please don't hesitate to reach out.