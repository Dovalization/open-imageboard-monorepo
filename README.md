# **OpenBoard** 🗣️

**OpenBoard** is an open-source, self-hosted message board/forum built for privacy-conscious communities, niche interests, hobbyists, and anyone looking for a space to share ideas and engage in discussions. It is designed to be a modern alternative to message boards, offering a user-friendly interface and a range of features to enhance the discussion experience.

Inspired by old internet forums, bulletin boards systems, images boards, and platforms like Geocities, 4chan, Reddit, and Twitter, OpenBoard aims to provide a platform for sharing ideas, discussing topics, and building communities around shared interests.

It is designed to be a lightweight, fast, and easy-to-use platform that can easily be self-hosted.
It is built with a focus on privacy, security, and user control. Anyone can host their own instance of the platform, customize it to their liking, and control their data.

Read more about the project vision [here](docs/project-vision.md).

**OpenBoard** is designed as a community-driven platform that focuses on user experience and customization. It is built with modern web technologies and follows best practices for security and performance.
This monorepo is powered by **Next.js** for the frontend, **NestJS** for the backend, and leverages a **PostgreSQL** database along with **Redis** for caching.

## Project Structure

This repository uses **Turborepo** to manage multiple packages and applications within a single monorepo. Here's the structure of the project:

```
.
├── apps
│   ├── api                       # NestJS app (backend)
│   └── web                       # Next.js app (frontend)
└── packages
    ├── @repo/eslint-config       # ESLint configurations (includes Prettier)
    ├── @repo/jest-config         # Jest configurations
    ├── @repo/typescript-config   # TypeScript configurations
```

## ✨ Features

- **Boards & Threads**  
  Organize discussions by boards and threads. Each board can have its own rules and settings.

- **Customizable Experience**
  Board owners can customize their boards with rules, descriptions, tags, links to external resources, and more.

- **OAuth Authentication**  
  Support for third-party login providers if you want to layer in identity.

- **Moderation Tools**
  Built-in admin panel with post deletion, user bans, and rule enforcement.
  OpenBoard provides a sensible suite of moderation tools to keep your community safe and healthy.

- **Role & Permission System**  
  Fully configurable roles (admin, mod, etc.) and per-board rules.

- **REST API**  
  Clean, modular REST endpoints for frontend consumption or API clients.

- **Docker Deployment**  
  Easy to spin up locally or in production via Docker Compose.

## 🧰 Tech Stack

- **TypeScript**: A superset of JavaScript that adds static types.
- **Next.js**: Frontend framework for building user interfaces.
- **NestJS**: Backend framework for building scalable server-side applications.
- **PostgreSQL**: Relational database for data storage.
- **Redis**: In-memory data structure store for caching.
- **Docker**: Containerization platform for easy deployment.
- **Turborepo**: Monorepo management tool for managing multiple packages and applications.

## 🧭 Roadmap

> Coming soon: The scope of the MVP and future features are still being defined.

## 💡 Guiding Values

- **Customizable**
  No two communities are the same. OpenBoard is designed to be flexible and customizable to fit your needs.

- **Modular by Design**  
  Easy to strip down or extend. Built for tinkerers and power users.

- **Privacy-First**  
  OpenBoard is designed with privacy in mind. No tracking, no ads, no data mining.
  We have a commitment to protecting user privacy and data security.
  We are fully transparent about how the platform works and what data is collected and how it is used.

- **Data Ownership**  
  Your data is your and yours alone. Have it removed at any time and take it with you if you want.
  Easily export your data in standard formats (JSON, CSV) for backup or migration.
  All data is stored solely on the server it's hosted on and is not shared with any third parties.

- **Admin Control**  
  You decide how your community operates—rules, roles, features.

- **Developer Friendly**  
  Type-safe, well-structured, and easy to deploy and contribute to.

- **Community Driven**
  Built for communities, by communities. Your feedback shapes the future.

- **Open Source**  
  Fully open source under the MIT license. Fork, modify, and self-host.

- **No Vendor Lock-In**
  Self-hostable and portable. If it runs docker, you can run OpenBoard.
  No proprietary APIs or data formats.

## 🚀 Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js**: `>=14.0.0`
- **Docker**: For containerized deployment
- **pnpm**: Preferred package manager (install via `npm i -g pnpm`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Dovalization/open-imageboard-monorepo.git
cd open-imageboard-monorepo
pnpm install
```

### Prisma Setup

Set up the database connection in the `.env` file located in the `apps/api` directory.
Make sure to update the `DATABASE_URL` variable with your PostgreSQL connection string.

```env
DATABASE_URL="postgresql://user:password@localhost:5432/openboard"
```

Run the following command to create the database and apply migrations:

```bash
cd apps/api
pnpm prisma migrate dev --name init
```

This will create the database and apply the initial migrations.
You can also use the following command to create a new migration after making changes to the Prisma schema:

```bash
cd apps/api
pnpm prisma migrate dev --name <migration-name>
```

You can also use the following command to generate a new Prisma client after making changes to the Prisma schema:

```bash
cd apps/api
pnpm prisma generate
```

This will generate the Prisma client in the `node_modules/@prisma/client` directory.

### Running locally

To run both the **API** and the **Web App** locally:

```bash
pnpm run dev
```

This will start both the frontend (Next.js app) and the backend (NestJS API).

### Database

The platform uses **PostgreSQL** for data storage. The database schema includes tables for users, boards, threads, posts, roles, permissions, and more.

You can set up the database by running:

```bash
docker-compose up -d
```

This will bring up the database in a Docker container. The API will connect to the PostgreSQL database using the connection details in the `.env` file.

### Docker Setup

You can use Docker to easily deploy the entire application, including the backend and frontend.

1. **Building Docker Containers**:

```bash
docker-compose build
```

2. **Running the Docker Containers**:

```bash
docker-compose up -d
```

This will run both the frontend (Next.js) and backend (NestJS) in Docker containers.

### Testing

Unit and integration tests are written using **Jest** and **Playwright** for end-to-end testing.

Run tests:

```bash
pnpm run test
```

For end-to-end tests:

```bash
pnpm run test:e2e
```

### Deployment

> Coming soon: Deployment guide for production environments.

## Inspirations

- [YouTube - Bulletin Board System (BBS) - The Internet's First Community
  ](https://www.youtube.com/watch?v=I18ifd8I6P8)
- [Wikipedia - Bulletin Board System](https://en.wikipedia.org/wiki/Bulletin_board_system)
- [Wikipedia - Internet Forum](https://en.wikipedia.org/wiki/Internet_forum)
- [Wikipedia - Imageboard](https://en.wikipedia.org/wiki/Imageboard)

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute this code as you see fit.

## 🤝 Contributing

We're building this in the open. Contributions, discussions, and feature suggestions are welcome.  
Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new pull request

## 👀 Status

This project is in early development. Stay tuned for the first stable MVP release.
