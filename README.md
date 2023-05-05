# Nest.js Project with Vercel Deployment

This is a template for creating a Nest.js project with Vercel deployment support. Follow the steps below to set up and deploy your project.

## Prerequisites

- Node.js (>= 14.x.x)
- npm (>= 6.x.x)
- Nest.js CLI (>= 8.x.x)

## Getting Started

To create a new Nest.js project using the custom CLI for Vercel deployment, follow these steps:

1. Install the custom CLI globally on your system:

```bash
npm install -g nestjs-vercel-cli
```
2. Create a new Nest.js project:
```bash
nestjs-vercel create my-nest-vercel-project
```
>Replace my-nest-vercel-project with your desired project name.

>This command will create a new Nest.js project with the necessary Vercel deployment configuration (vercel.json).

3. Project Structure

After creating your project, you will have the following structure:

```my-nest-vercel-project/
  ├── src/
  │   ├── app.controller.ts
  │   ├── app.module.ts
  │   ├── app.service.ts
  │   └── main.ts
  ├── test/
  ├── vercel.json
  ├── .gitignore
  ├── nest-cli.json
  ├── package.json
  ├── README.md
  ├── tsconfig.build.json
  └── tsconfig.json
  ```


4. Development
```bash
npm run start:dev
```
The server will be available at http://localhost:3000.

5. Deployment

To deploy your project on Vercel, follow these steps:

* Install the Vercel CLI globally on your system:
```bash
npm install -g vercel
```
* Log in to your Vercel account:
```bash
vercel login
```
* Deploy your project:
```bash
cd my-nest-vercel-project
vercel
```
