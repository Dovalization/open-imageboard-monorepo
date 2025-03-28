# **OpenImageboard**

**OpenImageboard** is an open-source, easy-to-deploy, and customizable imageboard platform. It provides an easy way to host and manage community-driven discussions, similar to platforms like 4chan, Reddit, and Twitter. The project is designed to be flexible, extensible, and easy to set up for anyone looking to run their own imageboard.

## **What's inside?**

This **monorepo** uses **Turborepo** to organize the backend and frontend of the project. It is built using **Next.js** for the frontend and **NestJS** for the backend.

### **Apps and Packages**

    .
    ├── apps
    │   ├── api                       # NestJS app (https://nestjs.com).
    │   └── web                       # Next.js app (https://nextjs.org).
    └── packages
        ├── @repo/eslint-config       # `eslint` configurations (includes `prettier`)
        ├── @repo/jest-config         # `jest` configurations
        ├── @repo/typescript-config   # `tsconfig.json`s used throughout the monorepo

### **Utilities**

This **Turborepo** comes with additional tools already configured for ease of development:

- [TypeScript](https://www.typescriptlang.org/) for static type-safety.
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io) for code formatting.
- [Jest](https://prettier.io) & [Playwright](https://playwright.dev/) for testing.

## **Commands**

Turborepo is configured with some useful commands for all apps and packages:

#### **Build**

```bash
# Will build all the apps & packages with the supported `build` script.
pnpm run build

# ℹ️ If you plan to build apps individually,
# Please make sure you've built the packages first.
```

#### **Develop**

```bash
# Will run the development server for all the apps & packages with the supported `dev` script.
pnpm run dev
```

#### **Test**

```bash
# Will run the test suites for all the apps & packages with the supported `test` script.
pnpm run test

# You can run end-to-end tests with `test:e2e`
pnpm run test:e2e

# See `@repo/jest-config` to customize the behavior.
```

#### **Lint**

```bash
# Will lint all the apps & packages with the supported `lint` script.
# See `@repo/eslint-config` to customize the behavior.
pnpm run lint
```

#### **Format**

```bash
# Will format all the supported `.ts,.js,json,.tsx,.jsx` files.
# See `@repo/eslint-config/prettier-base.js` to customize the behavior.
pnpm run format
```

## **Tech Stack**

- **Frontend:** Next.js
- **Backend:** NestJS
- **Database:** PostgreSQL (managed with Prisma ORM)
- **Authentication:** OAuth, Anonymous authentication
- **Deployment:** Docker for easy deployment

## **Installation**

To run this project locally, follow these steps:

### **1. Clone the repository**

```bash
git clone https://github.com/Dovalization/open-imageboard-monorepo.git
cd open-imageboard-monorepo
```

### **2. Install dependencies for backend and frontend**

```bash
# Install backend dependencies
cd apps/api
npm install

# Install frontend dependencies
cd ../web
npm install
```

### **3. Set up the database**

- Make sure you have **Docker** installed on your machine.

- Run PostgreSQL in Docker:

```bash
docker-compose up
```

### **4. Run Prisma migrations**

- Inside the `apps/api` folder, run the migrations to set up the database:

```bash
npx prisma migrate dev --name init
```

### **5. Run the project**

- To start the backend server:

```bash
cd apps/api
npm run start:dev
```

- To start the frontend server:

```bash
cd ../web
npm run dev
```

## **Usage**

Once the app is running:

1. Go to [http://localhost:3000](http://localhost:3000) to access the frontend.
2. The **backend API** is available at [http://localhost:3001/api](http://localhost:3001/api).
3. You can start creating boards, threads, and posts, or explore the API for programmatic access.

## **API**

The **REST API** is designed to be straightforward and extensible.

### **Endpoints**

#### **Threads**

- **GET /threads**  
  Get all threads.

- **GET /threads/:id**  
  Get a single thread by ID.

- **POST /threads**  
  Create a new thread.

- **DELETE /threads/:id**  
  Delete a thread by ID.

#### **Posts**

- **GET /threads/:threadId/posts**  
  Get all posts in a thread.

- **POST /threads/:threadId/posts**  
  Create a new post in a thread.

- **DELETE /posts/:id**  
  Delete a post by ID.xw

## **Contributing**

We welcome contributions! To contribute:

1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch (`git checkout -b feature-name`).
4. Make your changes and write tests.
5. Commit and push your changes.
6. Submit a pull request.
