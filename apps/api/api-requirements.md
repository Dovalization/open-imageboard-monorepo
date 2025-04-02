# API Requirements

## General Requirements

- The API must be RESTful and follow standard HTTP methods (GET, POST, PUT, DELETE).
- Use JSON as the data format for requests and responses.
- Ensure proper error handling with meaningful HTTP status codes and error messages.
- Implement authentication and authorization for secure access.
- Provide clear and up-to-date API documentation.

## Functional Requirements

1. **User Management**

   - Create, read, update, and delete user accounts.
   - Support user authentication (e.g., login/logout).
   - Allow password reset functionality.

2. **Anonymous User Management**

   - Allow anonymous users to create threads and posts.
   - Anonymous users should be able to view threads and posts without authentication.
   - Implement a mechanism to track anonymous users (e.g., session ID, cookies).
   - Should be able to ban anonymous users if they violate community guidelines.

3. **Board Management**

   - Create, read, update, and delete boards.
   - A board requires a user asigned as board owner.
   - Support board categorization (e.g., public, private).
   - Board owners should be able to manage board settings.
   - Customization option for:
     - Board name
     - Description
     - Cover image
     - Board rules
     - Links to external resources
     - Tags or categories
     - Custom field: Rich text support to add additional information, links or any other content.
     - List of moderators
   - Public and private boards
   - Invite-only support (private boards that require an invitation to join)
   - Waitlist support (allow users to request to follow private boards)
   - Option to allow anonymous users to interact with the board
   - Option to require authentication to interact with the board
   - Allow users to follow/unfollow boards.
   - Implement board search functionality.

4. **Thread Management**

   - Create, read, update, and delete threads.
   - Support thread categorization (e.g., pinned, archived, tagged).
   - Allow users to watch/unwatch threads for notifications.
   - Implement thread locking/unlocking functionality. (e.g., for moderation).
   - Allow users to report threads for moderation.
   - Implement thread search functionality.
   - Sort threads by various criteria (e.g., latest activity, most popular).
   - A thread is a collection of posts.

5. **Post Management**

   - Create, read, update, and delete posts.
   - A post can be a text, image, or video.
   - A post is a single message within a thread.
   - Posts do not nest, they follow a flat structure.
   - Support formatting options (e.g., Markdown, HTML).
   - Support requiring the user to solve a reCAPTCHA or similar challenge before posting.

## Non-Functional Requirements

- Ensure the API is scalable to handle high traffic.
- Use a database to persist data (e.g., PostgreSQL, MongoDB).
- Implement rate limiting to prevent abuse.
- Ensure the API is secure against common vulnerabilities (e.g., SQL injection, XSS).
- Write unit and integration tests for critical endpoints.
- Deploy the API using a cloud provider or containerized solution (e.g., Docker).

## Performance Requirements

- Response time for API calls should be under 200ms for 95% of requests.
- Support concurrent users with minimal performance degradation.

## Documentation

- Provide an OpenAPI/Swagger specification.
- Include examples for all endpoints.
- Document authentication and error codes.
