# **OpenBoard ADR 01:** Design Goals and Architectural Direction

This document outlines our strategic design goals and architectural philosophy, which guide the development of a sustainable, maintainable, and user-friendly platform. These principles ensure that technical decisions align closely with the platform’s overall vision.

## Design Goals

### Low-Maintenance Platform

Maintenance encompasses tasks performed by the core team to ensure ongoing code quality and platform stability, including:

- Comprehensive unit and end-to-end testing.
- Efficient incident management and rapid recovery.
- Proactive dependency management and timely updates.

To minimize maintenance requirements, we commit to:

- Achieving robust test coverage.
- Strictly limiting third-party dependencies.
- Consistently aligning the codebase with officially supported framework versions.

### Low-Code Platform

We aim to empower users by minimizing the coding required for customization and ongoing development. Our approach emphasizes clear, concise, and expressive implementations by:

- Offering extensive built-in functionality.
- Utilizing productivity-oriented tools such as code generators, advanced IDE refactoring features, and automation scripts to reduce repetitive tasks.

### Minimal Third-Party Dependencies

The Node.js ecosystem tends to suffer from dependency inflation, adding unnecessary complexity. To combat this, we commit to:

- Maintaining minimal, thoroughly vetted dependencies.
- Prioritizing long-term maintainability over immediate convenience.

## Architectural Philosophy

Our architecture evolves intentionally, ensuring adaptability and pragmatism to facilitate growth and future adjustments. Core principles include:

- **Fail Fast**: Rapid, informed decision-making.
- **Perfectible, Not Perfect**: Solutions designed for evolution.
- **Plan for Change**: Flexibility as a cornerstone.
- **Just-in-Time Over Just-in-Case**: Avoiding premature optimization.

### Modular Monolith

We've chosen a modular monolith architecture to balance maintainability and simplicity against the complexity introduced by distributed systems. Key characteristics include:

- Independent, clearly defined modules.
- Explicit boundaries and separation of concerns.

Guidelines for our modular approach:

- Avoid premature abstraction—favoring simplicity and clarity. Regular complexity assessments will determine the necessity for abstraction, focusing on repetitive patterns and clear maintainability issues.
- Develop features and abstractions strictly on an as-needed basis.

## Framework and Tooling

### Next.js

Next.js is our frontend framework due to its dual client-server capabilities, which streamline development with unified logic and type safety.

Key advantages:

- Shared logic between client and server.
- Efficient hydration, routing, and data loading.
- Flexible rendering options: SPA, SSR, SSG.

### Tailwind CSS

Tailwind CSS is our preferred styling solution due to its efficiency and composability without relying on traditional CSS or CSS-in-JS methodologies:

- Rapid development of consistent design systems.
- Enhanced productivity through composability.

### NestJS

NestJS provides our backend foundation, offering a structured, scalable architecture with robust TypeScript integration.

Key benefits:

- Encourages modular architecture and clean code.
- Strong TypeScript support for type safety.
- Simplified testing via dependency injection.
- Extensive ecosystem (WebSockets, GraphQL, Prisma).
- Excellent structure for RESTful API development.

## API-First Strategy

Adopting an API-first strategy provides flexibility and extensibility, enabling:

- Versatile client integrations (Next.js, future mobile applications).
- Clear separation between frontend and backend.
- Advanced customization through flexible permission and role management.

Our implementation includes:

- RESTful API endpoints (`/threads`, `/posts`, `/boards`) complemented by specialized administrative and moderation endpoints (`/admin`, `/moderation`).
- Predictable and clear endpoint naming conventions.
- Strict client-server separation to enhance maintainability.

## Alignment with Platform Vision

Our vision is a customizable, self-hosted message board platform. Technical choices supporting this vision include:

### 1. API-First → Extensibility

- Support for diverse client integrations.
- Facilitation of future enhancements like GraphQL and WebSockets.
- Community-driven extensions and customizations.

### 2. Modular Monolith → Simplicity & Scalability

- Streamlined codebase management.
- Modular design supporting future scalability.
- Defined interfaces improving maintainability.

### 3. Prisma + PostgreSQL → Robust Data Layer

- Reliable, scalable data management.
- Type-safe database operations.
- Advanced moderation and content sorting capabilities.

### 4. Flexible Authentication → User-Centric Security

- Supports both anonymous and OAuth authentication.
- Highly adaptable authentication configurations.

### 5. Docker-Based Deployment → Easy Hosting

- Simplified setup through Docker Compose.
- Consistent deployment environments.
- Streamlined configurations via environment variables.

### 6. Admin & Moderation → Community Empowerment

- Comprehensive moderation and administration tools.
- Highly configurable rules and user roles.
- Planned moderation features include thread locking, user banning and suspension, post deletion, content reporting, profanity filtering, and detailed moderation logs.
