# **OpenBoard API**

This is the **REST API backend** for the OpenBoard platform, developed with **NestJS** and **Prisma**. It serves as the backend for all user interactions, including authentication, board management, and content posting.

## 🔗 Links

- [OpenBoard API Requirements](api-requirements.md)
- [OpenBoard](../../README.md)
- [OpenBoard Web](../web/README.md)

## 🧰 Tech Stack

- **NestJS** – A progressive Node.js framework for building efficient and scalable server-side applications
- **Prisma** – A modern ORM for Node.js and TypeScript
- **PostgreSQL** – A powerful, open-source relational database
- **TypeScript** – A superset of JavaScript that adds static types

## 📁 Project Structure

```
apps/api
├── prisma              # Prisma schema and migrations
├── src
│   ├── modules         # NestJS modules for different features
│   ├── pipes           # Custom validation and transformation pipes
│   ├── requests        # HTTP requests for REST Client VSCode extension to test API
```

## 🚀 Getting Started

Please refer to [Getting Started](../../README.md#-getting-started) for general setup instructions.

## 📝 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute this code as you see fit.

## 🤝 Contributing

We're building this in the open. Contributions, discussions, and feature suggestions are welcome.  
Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new pull request

> Coming soon: Contribution guidelines and code of conduct.
