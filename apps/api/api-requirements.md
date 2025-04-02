# API Requirements

## General Requirements

- The API must be RESTful and follow standard HTTP methods (GET, POST, PUT, DELETE).
- Use JSON as the data format for requests and responses.
- Ensure proper error handling with meaningful HTTP status codes and error messages.
- Implement authentication and authorization for secure access.
- Provide clear and up-to-date API documentation.

## Functional Requirements

1. **Authentication and User Management**

- Create, read, update, and delete user accounts.
- Support email and password authentication or anonymous authentication.
- Support third-party authentication (e.g., OAuth, Google).
- JWT support for token-based authentication.
- Allow password reset functionality.
-

2. **User Roles and Permissions**

- Implement user roles (e.g., admin, moderator, registered user, anonymous user, banned and deleted users).
- Support role-based access control (RBAC) for different actions.
- Admins should have full access to all features.
- Moderators should have access to moderation features (e.g., thread locking, user banning, deleting posts).
- Registered users should have access to create threads and posts.
- Anonymous users should have limited access (e.g., view threads and posts).
- Permissions should be configurable for each role. (i.e. who can create threads, posts, etc).

3. **Administration and Moderation**

- Provide an admin dashboard for managing boards, threads, posts, and users.
- Content moderation tools:

  - Lock/unlock threads.
  - Delete threads and posts.
  - Edit threads and posts.
  - Pin/unpin threads.
  - Archive threads.
  - Report threads and posts.
  - Blacklist certain words or phrases. e.g., profanity filter.
  - Support for user and content reporting.

- User moderation tools:

  - Ban/unban users.
  - Suspend users for a specific period.
  - Banning or suspending a user requires a reason.
  - Multiple ban types: ip, user, email.
  - Delete user accounts.
  - Edit user accounts.
  - View user activity logs.
  - View user reports.
  - Autoban users based on certain criteria (e.g., language, behavior, spam).
  - Support for user notes (private notes for moderators).
  - Support for user warnings (e.g., 3 strikes and you're out).
  - Ban logs are stored in the database for audit purposes.
  - Access to the ban logs can be restricted based on user roles.
  - The banned user should have access to their ban logs.
  - The banner user should be able to appeal their ban.
  - Ban logs should include:
    - Ban ID
    - User ID
    - Board ID
    - Ban reason
    - Ban type (e.g., IP ban, user ban, email ban)
    - Ban start/end date. If the ban is permanent, it should be marked as such.
    - Admin/moderator who issued the ban

4. **Board Management**

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

5. **Thread Management**

- Create, read, update, and delete threads.
- Support thread categorization (e.g., pinned, archived, tagged).
- Allow users to watch/unwatch threads for notifications.
- Sort threads by various criteria (e.g., latest activity, most popular).
- A thread is a collection of posts.

6. **Post Management**

- Create, read, update, and delete posts.
- A post can have text, image and video.
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
