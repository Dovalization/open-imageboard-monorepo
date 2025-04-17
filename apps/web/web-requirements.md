# Front-End Requirements

## General Requirements

- The frontend must use **Next.js** with TypeScript.
- Styling must use **Tailwind CSS** for consistency and productivity.
- State management should rely only on **React hooks** and **Context API**, avoiding global state unless necessary.
- All frontend-server communication must be through the **REST API**, using `fetch` or an HTTP client (e.g., Axios).
- Ensure proper error handling with user-friendly messages.
- Implement loading and error states for all data fetches.
- Maintain a consistent, accessible, responsive UI across screen sizes.
- Use Zod for client-side schema validation where applicable.

## Functional Requirements

### 1. Authentication and User Sessions

- Support anonymous, pseudonymous (username + password), and OAuth-based login.
- Implement authentication flows:
  - Login and logout
  - Registration
  - Password reset
  - OAuth redirect/callback
- Show authenticated user state via a session-aware header or avatar menu.
- Persist session tokens across page reloads using cookies or localStorage.

### 2. Role-Based Access and Conditional UI

- Render UI elements conditionally based on user roles:
  - Admin: Full access to admin dashboard and tools.
  - Moderator: Access to moderation tools (inline actions, reports).
  - Registered: Can create threads and posts.
  - Anonymous: Can view content and optionally post (if allowed).
- Hide or disable unauthorized features based on current role.
- Display role indicators where relevant (e.g., moderator tags, role badges).

### 3. Board Management UI

- List all public boards with search and filtering support.
- Board detail page:
  - Show cover image, title, description, and rules.
  - List of moderators and custom board fields.
- Support private boards:
  - Invite-only: Request access or join via token/invite.
  - Waitlist: Join request form.
  - Toggle anonymous interaction setting.
- Follow/unfollow board feature with UI feedback.

### 4. Thread Management UI

- Display threads within a board:
  - Sorting options (latest, bump, popular).
  - Labels: pinned, locked, archived.
  - Watch/unwatch toggle for notifications.
- Thread detail view:
  - Show all posts in flat order.
  - Allow replying with post composer.
  - Highlight OP and new posts.
- Inline thread actions (if permitted):
  - Edit, delete, pin, lock, archive.

### 5. Post Management UI

- Post composer:
  - Text input with markdown preview toggle.
  - Media upload (image, video).
  - Support optional reCAPTCHA challenge before posting.
- Post view:
  - Render markdown or HTML.
  - Display attached media.
  - Post actions: edit, delete (based on permissions).
- Error messages and content restrictions must be clearly communicated.

### 6. Moderation Interface

- Accessible to moderators/admins only.
- Inline moderation panel on threads/posts:
  - Lock, delete, pin, archive, report handling.
- User moderation panel:
  - Ban/suspend (with reason), view activity and reports.
  - Warning issuance and strike tracking.
  - Private moderator notes.
- Ban log viewer (admin-only):
  - Full ban history with filters by user, board, type, date.

### 7. Admin Dashboard

- Navigation sidebar with admin sections:
  - Boards, Threads, Users, Moderators.
- CRUD UIs for:
  - Creating/updating boards.
  - Managing moderators and roles.
  - Viewing user lists and detailed profiles.
- Rich text fields for board configuration (e.g., rules, descriptions).
- Configurable permissions for roles and boards.

### 8. User Profile and Settings

- User panel for:
  - Viewing followed boards and watched threads.
  - Updating pseudonym, email, or password.
  - Viewing ban logs (if banned).
  - Viewing/modifying notification settings.
- Settings for:
  - Theme (light/dark/system).
  - Post format (markdown/html).
  - Default thread sorting.

### 9. Notifications and Feedback

- Display real-time or deferred notifications for:
  - Watched threads (new replies).
  - Moderation updates (bans, warnings).
- Toast notifications for success/failure actions.
- Display rate limits and permission errors clearly.
- Optional UI hints or tooltips for complex actions.

## Non-Functional Requirements

- Ensure the UI is accessible (keyboard navigation, semantic HTML, ARIA).
- Use lazy loading and code splitting to optimize performance.
- Minimize third-party dependencies, favoring built-in features.
- Responsive design must work on mobile, tablet, and desktop.
- Optimize images and media with Next.js `<Image />`.
- Handle offline and slow network states gracefully.

## Performance Requirements

- Page load times should be under 1s for most pages on broadband.
- Client-side navigations should complete in under 500ms.
- Optimize largest contentful paint (LCP) and first input delay (FID).
- Lazy-load heavy components and defer non-critical JS.

## Documentation

- Provide a developer README for setting up and running the frontend.
- Document environment variables (e.g., API base URL, OAuth providers).
- Inline code comments and consistent code formatting.
- Use a component library or Storybook to document reusable UI components (optional).

