# WhatsDate Marketing Website

This is the official marketing website for WhatsDate, an AI-powered WhatsApp auto-reply application. The website is built with Next.js 15 and serves as the primary landing page to promote and distribute the WhatsDate desktop application.

## Website Overview

The WhatsDate website (`/websitecursor`) is designed to:
- Introduce users to the WhatsDate AI dating assistant
- Showcase key features and benefits
- Provide download links and installation instructions
- Explain how the app works
- Capture user interest with beta program offerings

## Technology Stack

### Core Framework
- **Next.js 15.3.3**: React-based framework with App Router
- **React 19**: Latest React with modern features
- **TypeScript 5**: Full type safety throughout the application
- **Tailwind CSS 4**: Utility-first CSS framework for styling

### Key Dependencies
- **Framer Motion 12.16.0**: Advanced animations and transitions
- **@heroicons/react 2.2.0**: SVG icon library
- **React Icons 5.5.0**: Popular icon library
- **@vercel/analytics 1.5.0**: Web analytics integration

### Development Tools
- **Tailwind CSS PostCSS**: CSS processing and optimization
- **TypeScript Config**: Strict type checking configuration
- **Next.js Config**: Framework configuration with TypeScript

## Project Structure

```
/websitecursor/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx            # Homepage/landing page
│       ├── theme-provider.tsx  # Theme context and layout
│       ├── globals.css         # Global styles and CSS variables
│       ├── download/
│       │   └── page.tsx        # Download page with instructions
│       └── how-it-works/
│           └── page.tsx        # Step-by-step guide
├── public/
│   ├── whatsdate logo no bkgd.png  # Main logo asset
│   ├── demo.mp4                    # Product demo video
│   └── [other assets...]
├── package.json                # Project dependencies
├── tailwind.config.js         # Tailwind CSS configuration
├── next.config.ts             # Next.js configuration
└── tsconfig.json              # TypeScript configuration
```

## Key Features & Functionality

### Theme System
- **Dual Theme Support**: Light and dark mode toggle
- **Persistent Theme**: Uses localStorage to remember user preference
- **WhatsApp Color Scheme**: Custom color palette based on WhatsApp branding
- **Responsive Design**: Optimized for both desktop and mobile devices

### Mobile-First Design
- **Touch-Optimized**: Large tap targets (48px minimum)
- **Swipe Navigation**: Gesture-based page navigation
- **Zoom Prevention**: Disabled pinch-to-zoom for app-like experience
- **Mobile Header**: Two-row layout for better mobile navigation

### Page Structure

#### Homepage (`/src/app/page.tsx`)
- **Hero Section**: Prominent beta launch announcement with free credits offer
- **Feature Grid**: Six key features with animated icons
- **How It Works**: Step-by-step process overview
- **Video Demo**: Embedded product demonstration
- **Call-to-Action**: Download button with beta incentives

#### Download Page (`/src/app/download/page.tsx`)
- **Platform Support**: Windows download with macOS/Linux coming soon
- **Installation Guide**: Four-step setup process with visual icons
- **System Requirements**: Technical specifications
- **FAQ Section**: Common questions and answers
- **GitHub Integration**: Direct links to releases

#### How It Works Page (`/src/app/how-it-works/page.tsx`)
- **Detailed Steps**: Expanded four-step process
- **Email Integration**: Direct mailto links for credit claims
- **Visual Design**: Step-by-step with icons and animations
- **User Guidance**: Clear instructions for beta participation

### Design Elements

#### WhatsApp Branding
- **Color Palette**: 
  - Primary Green: `#25D366` (WhatsApp brand color)
  - Dark Green: `#075E54` (WhatsApp dark variant)
  - Light Green: `#DCF8C6` (WhatsApp message bubble)
  - Background: `#F7FFF9` (Light mode background)

#### Animations
- **Framer Motion**: Page transitions and element animations
- **CSS Animations**: Icon animations (bounce, pulse, slow spin)
- **Swipe Gestures**: Touch-based navigation with visual feedback
- **Hover Effects**: Interactive elements with scale and glow effects

#### Typography
- **Geist Font Family**: Modern, clean typography
- **Font Weights**: From regular to extrabold for hierarchy
- **Responsive Sizing**: Scales appropriately across devices

### Beta Program Features
- **Free Credits**: 1000 free AI responses for early adopters
- **Email Integration**: Automated email templates for credit claims
- **Limited Time**: Creates urgency with beta program messaging
- **Early Access**: Exclusive beta tester positioning

## Configuration Files

### `tailwind.config.js`
Custom color scheme extending Tailwind with WhatsApp brand colors:
- Custom color variables for consistent branding
- Drop shadow utilities for glow effects
- Extended color palette for light/dark themes

### `next.config.ts`
Next.js configuration optimized for:
- TypeScript support
- Image optimization
- Static asset handling

### `globals.css`
Global styles including:
- CSS custom properties for theming
- WhatsApp color scheme definitions
- Mobile optimization styles
- Touch interaction improvements
- Animation keyframes

## Marketing Strategy

### Target Audience
- **Primary**: Young adults interested in dating apps
- **Secondary**: WhatsApp power users seeking automation
- **Tertiary**: Tech-savvy individuals interested in AI tools

### Value Propositions
1. **Free Beta Access**: 1000 free credits to reduce barrier to entry
2. **Privacy-Focused**: No OpenAI keys required, data stays local
3. **Easy Setup**: QR code authentication, no complex configuration
4. **Natural Responses**: Human-like timing and contextual replies
5. **WhatsApp Native**: Works directly with existing WhatsApp

### Conversion Funnel
1. **Awareness**: Landing page with compelling hero section
2. **Interest**: Feature showcase and demo video
3. **Consideration**: How-it-works page with clear process
4. **Action**: Download page with clear installation steps
5. **Retention**: Email contact for support and feedback

## Development Workflow

### Build Commands
- `npm run dev`: Development server with Turbopack
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run lint`: Code linting

### Deployment
- Optimized for Vercel deployment
- Static generation for better performance
- Analytics integration for user tracking

## Future Enhancements

### Planned Features
- **macOS Support**: Download option for Mac users
- **Linux Support**: Download option for Linux users
- **Feature Comparison**: Detailed feature comparison table
- **Testimonials**: User reviews and success stories
- **Blog Integration**: Content marketing capabilities

### Technical Improvements
- **Performance**: Bundle optimization and lazy loading
- **SEO**: Enhanced metadata and structured data
- **Accessibility**: WCAG compliance improvements
- **Analytics**: Enhanced tracking and conversion optimization

This marketing website serves as the primary touchpoint for potential WhatsDate users, focusing on clear value communication, easy onboarding, and beta program participation to drive early adoption of the desktop application.

## System Requirements

- Windows operating system
- Node.js installed (for development)
- Web browser (Chrome recommended for interacting with the local web UI)
- Active WhatsApp account

## Local Setup (Development)

1. Clone the repository:
   ```shell
   git clone https://github.com/andyparis03/WhatsDate.git
   cd WhatsDate
   ```

2. Install dependencies:
   ```shell
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```env
   SELF_CONTACT_ID=xxxxx@c.us
   LICENSE_KEY=WD-XXX-XXXXXXXX-XXXXXX-XXXX
   OPEN_AI_MODEL_KEY=gpt-4-turbo
   OPEN_AI_SYSTEM_PROMPT="This is an example coming from readme file"
   ```
   - `SELF_CONTACT_ID`: Your WhatsApp ID (e.g., `1234567890@c.us`). The application will log this ID to the console upon first successful authentication if you need to find it.
   - `LICENSE_KEY`: Your WhatsDate license key (format: WD-TYPE-XXXXXXXX-XXXXXX-XXXX). Required for secure API access and credit management.
   - `OPEN_AI_MODEL_KEY`: The OpenAI model to use (e.g., `gpt-4-turbo`, `gpt-4`).
   - `OPEN_AI_SYSTEM_PROMPT`: The initial system prompt for the AI. This can also be changed via the web UI.

### 🔒 **Security Note for End Users**
WhatsDate uses a **secure proxy architecture** - no OpenAI API keys are required from users. All API access is handled through licensed, secure cloud infrastructure with credit-based usage limits.

4. Run the application in development mode:
   ```shell
   npm start
   ```
   This will typically launch the Electron application. The backend Node.js process (containing the WhatsApp logic and API server) is forked by the Electron main process.

5. The web interface (for QR scanning, contact management, etc.) should be accessible at a dynamically assigned port. The Electron main process console and the backend process console (visible in your terminal) will log the URL (e.g., `http://localhost:XXXXX`).

6. Scan the QR code displayed in the web interface with your WhatsApp mobile application to authenticate.

7. Once authenticated, your WhatsApp ID will be displayed in the backend console. Update your `.env` file with this ID if it was initially unknown.

## Usage

### Web Interface
After starting the application and authenticating, the web interface (accessible at the logged URL, e.g., `http://localhost:XXXXX`) allows you to:
- View and manage your WhatsApp contacts.
- Enable/disable auto-response globally or per contact.
- View conversation history with message grouping.
- Configure the AI system prompt.
- Check connection status and scan the QR code when needed.
- Receive real-time updates for new messages and status changes.

### Regular Messaging
Once set up and auto-response is enabled (globally or for specific contacts), the bot will automatically respond to messages sent to your WhatsApp account. Responses are generated using OpenAI and timed by the `TimingManager`.

### Emoji Reactions
React to a received message with an emoji using WhatsApp's "React" feature. The bot will detect the reaction, remove it, and generate an AI response based on the emoji's context.

### Message Grouping
The application automatically groups consecutive messages from the same contact within a 12-second window. This provides better context for AI responses and reduces API calls.

## Building the Application
To build the executable:
```shell
npm run make
```
This uses Electron Forge to create a distributable application in the `out/` directory.


## Architecture Overview

WhatsDate employs a hybrid architecture combining local Electron desktop application with cloud-based Supabase infrastructure for licensing, security, and analytics.

### Hybrid Local-Cloud Architecture
- **Local Application**: Electron desktop app handling WhatsApp integration and user interface
- **Cloud Infrastructure**: Supabase backend for licensing, API proxying, and usage analytics
- **Secure Communication**: JWT-based authentication between local app and cloud services

### Process Architecture
- **Electron Main Process** (`src/main.ts`): Application lifecycle, window management, and IPC coordination
- **Electron Renderer Process** (`public/`): Frontend UI rendered in browser context
- **Backend Node.js Process** (`src/index.ts`): Forked process handling WhatsApp integration and AI logic
- **Preload Script** (`src/preload.ts`): Secure bridge between main and renderer processes

### Cloud Infrastructure (Supabase)
- **License Management Service**: JWT-based license validation and device management
- **OpenAI Proxy Service**: Secure API key management and request proxying with credit tracking
- **Usage Tracking Service**: Credit-based usage monitoring and analytics
- **Database**: PostgreSQL for license keys, device activations, usage logs, and security auditing

### Security Architecture
- **Local Security**: Environment detection, CSP, IPC security, input validation
- **Cloud Security**: JWT authentication, device fingerprinting, rate limiting, audit logging
- **API Security**: Secure OpenAI API proxying without exposing keys to clients
- **License Protection**: Hardware-based device fingerprinting and activation limits

### Data Flow Architecture
- **License Validation**: Client validates license → Supabase validates + generates JWT → Client stores token
- **API Requests**: Client → Supabase proxy (with JWT) → OpenAI API → Response + credit deduction
- **Local Data**: TimingManager for conversation state, Types system for data structures
- **Cloud Analytics**: Comprehensive usage tracking and security monitoring

## Key Files and Components

This section outlines the core files and their roles within the application.
For the most detailed and up-to-date technical documentation, including API endpoint specifications, data structures, function signatures, and in-depth descriptions of functionalities, please refer to the JSDoc comments located at the top of each relevant source code file (especially in the `src/` directory). The `/.cursor/rules/documentation.md` file also provides a higher-level overview of architectural decisions and other project-relevant information.

### `src/main.ts` (Electron Main Process)

*   **File Path:** `src/main.ts`
*   **Role:** Entry point for the Electron application. Manages the application lifecycle, creates the browser window, and handles inter-process communication (IPC).
*   **Key Functionalities:**
    *   Initializes Electron, handles single-instance locking to ensure only one app instance runs.
    *   Creates the main `BrowserWindow` that loads the user interface from `public/index.html`.
    *   Configures and loads `src/preload.ts` to enable secure IPC between the renderer (UI) and main processes.
    *   Forks the backend Node.js process (`src/index.ts`) using `child_process.fork`, which handles the core WhatsApp and AI logic.
    *   Manages IPC messages from the renderer process (e.g., `getAppPath`, `getDynamicPort`) and from the forked backend process (e.g., the dynamically assigned port for the backend API).
*   **Commonly Expected Changes / When to Update:**
    *   Modifying Electron window settings (e.g., size, title, appearance, webPreferences).
    *   Changing application lifecycle event handlers (e.g., `app.on('ready')`, `app.on('window-all-closed')`).
    *   Altering how the backend Node.js process is forked, managed, or communicated with.
    *   Adding new IPC channels or modifying existing ones for communication between main, renderer, and backend processes.

### `src/preload.ts` (Electron Preload Script)

*   **File Path:** `src/preload.ts`
*   **Role:** A script that runs in a privileged environment before the renderer process (web page) is loaded. It securely exposes selected IPC functionalities from the main process to the renderer process.
*   **Key Functionalities:**
    *   Uses `contextBridge.exposeInMainWorld` to create a well-defined API (`window.electronAPI`) accessible by the renderer process (`public/script.js`).
    *   Exposes functions for the renderer to invoke main process handlers (e.g., `getAppPath`, `getDynamicPort`) or to listen for events from the main process (e.g., `onSetBackendPort`).
    *   Essential for maintaining context isolation and security, preventing direct renderer access to Node.js APIs.
*   **Commonly Expected Changes / When to Update:**
    *   When new IPC channels need to be exposed from the main process to the renderer process (e.g., a new UI button needs to trigger a main process action).
    *   If existing exposed IPC functionalities need to be modified (parameters, return values) or removed.
    *   Remember to update corresponding `ipcMain` handlers in `src/main.ts` or `webContents.send` calls.

### `src/index.ts` (Backend Node.js Process)

*   **File Path:** `src/index.ts`
*   **Role:** The main backend logic of the application. This script is forked by `src/main.ts` and runs as a separate Node.js process. It handles all WhatsApp interactions, AI processing, data persistence, and serves the API for the frontend UI.
*   **Key Functionalities:**
    *   Initializes and manages the `whatsapp-web.js` client (handles authentication, QR code generation, listening to WhatsApp events like incoming messages).
    *   Initializes the OpenAI API client for generating AI responses.
    *   Runs an Express.js server to:
        *   Serve static files for the frontend UI (from the `public/` directory).
        *   Provide various API endpoints for the UI to interact with (e.g., `/api/status` for client status, `/qr` for QR code, `/api/contacts`, `/api/conversation`, `/api/system-prompt`). (Refer to JSDoc in the file for full API details).
        *   Offer a Server-Sent Events (SSE) endpoint (`/api/message-updates`) for pushing real-time updates (like new messages or status changes) to the UI.
    *   Processes incoming WhatsApp messages and reactions: filters out self-messages/broadcasts, groups consecutive messages from the same user.
    *   Manages AI response generation, including constructing appropriate prompts with conversation history obtained from `TimingManager`.
    *   Integrates with `TimingManager` for recording messages, retrieving conversation history, and managing auto-response settings for contacts.
    *   Loads necessary environment variables (e.g., API keys, system prompts) from the `.env` file.
*   **Commonly Expected Changes / When to Update:**
    *   Modifying how WhatsApp client events (`message`, `qr`, `authenticated`, `disconnected`, etc.) are handled.
    *   Changing the logic for processing incoming messages (e.g., filtering criteria, grouping strategy).
    *   Altering AI response generation (e.g., prompt engineering, context construction, interaction with OpenAI API).

## Commonly Expected Changes and File Locations

This section provides guidance on where to make specific types of changes:

### Adding New Features
- **New UI Components**: Add to `public/index.html`, style in `public/styles.css`, add behavior in `public/script.js`
- **New API Endpoints**: Add to `src/index.ts` in the Express server setup section
- **New IPC Channels**: Add handlers in `src/main.ts`, expose in `src/preload.ts`, use in `public/script.js`
- **New Configuration Options**: Add to `src/config/app-config.json` and update `src/utils/config.ts`

### Security Modifications
- **DevTools Access**: Modify `src/utils/environment.ts` and `src/config/app-config.json`
- **CSP Policies**: Update `src/utils/csp.ts` for new external resources or stricter policies
- **IPC Security**: Modify `src/utils/ipc-security.ts` for new validation rules or rate limits
- **Input Validation**: Update validation functions in `src/utils/ipc-security.ts` and `src/preload.ts`

### AI & WhatsApp Integration
- **Response Timing**: Adjust parameters in `src/TimingManager.ts` (delay ranges, caps, algorithms)
- **Message Processing**: Modify filtering and grouping logic in `src/index.ts`
- **AI Prompts**: Update default prompts in `src/index.ts` or via the UI
- **WhatsApp Events**: Add new event handlers in `src/index.ts` WhatsApp client setup

### Data & Persistence
- **Conversation Data**: Modify types in `src/types.ts` and update `src/TimingManager.ts`
- **Database Schema**: Update `src/types.ts` interfaces and migration logic in `src/TimingManager.ts`
- **Settings Storage**: Modify `src/config/app-config.json` structure and `src/utils/config.ts`

### Build & Deployment
- **Electron Configuration**: Update `forge.config.js` for packaging options
- **Dependencies**: Modify `package.json` for new packages or scripts
- **Environment Variables**: Update `.env` template and loading logic in `src/index.ts`
    *   Adding, removing, or modifying API endpoints or their request/response data formats.
    *   Changing the integration with `TimingManager` or the structure of data exchanged with it.
    *   Updating environment variable handling or introducing new configurable parameters.

### `src/TimingManager.ts`

*   **File Path:** `src/TimingManager.ts`
*   **Role:** A class responsible for managing adaptive response timing, conversation history, auto-response settings for each contact, and persisting this data.
*   **Key Functionalities:**
    *   Calculates appropriate delays for bot responses to simulate more natural conversation flow, based on past interaction patterns.
    *   Stores and retrieves the history of messages exchanged with each contact (see `MessageHistoryItem` in `src/types.ts`).
    *   Schedules bot responses using `setTimeout` and manages a queue of pending responses to ensure they are sent even if the application restarts.
    *   Persists all its data (conversation history, timing information, pending responses, auto-response settings) to a JSON file (`whatsapp-auth/timing-data.json`). The structure of this data is defined in `src/types.ts`.
    *   Handles loading data on application startup, processing any pending responses from a previous session, and cleaning up stale or irrelevant data.
    *   Provides methods to enable or disable auto-responses on a per-contact basis.
*   **Commonly Expected Changes / When to Update:**
    *   If the core timing algorithm for calculating response delays needs adjustment.
    *   When the structure of the persisted data (`TimingData`, `ConversationData` in `src/types.ts`) is modified.
    *   If the logic for handling conversation history, auto-response settings, or pending responses needs to be changed.
    *   When altering how data is loaded from or saved to `timing-data.json`.

### `src/types.ts`

*   **File Path:** `src/types.ts`
*   **Role:** Defines the core TypeScript interfaces and type aliases used throughout the application, particularly by the `TimingManager` and for data persistence in `timing-data.json`. These structures model conversation state, message history, pending responses, and the overall persistent data layout.
*   **Key Definitions:**
    *   `UnixTimestamp`: A type alias for millisecond-based Unix timestamps.
    *   `WhatsAppTimestamp`: A type alias for second-based timestamps from WhatsApp.
    *   `ConversationData`: Holds state for a single contact's conversation, including timing information, message history, and auto-response settings.
    *   `MessageHistoryItem`: Represents a single message (user or bot) within a conversation's history.
    *   `PendingResponse`: Details of a bot response that is scheduled for future delivery.
    *   `TimingData`: The root object structure for the `timing-data.json` file, containing maps of conversations and pending responses.
*   **Commonly Expected Changes / When to Update:**
    *   When the structure of conversation history needs to be changed.
    *   When new properties related to timing or message tracking are added or modified.
    *   If the format of the persisted `timing-data.json` file changes.
    *   When new data types are introduced that need to be managed by `TimingManager` or persisted.
    *   Refer to the JSDoc comment at the top of `src/types.ts` for more details.

### `src/utils/TimestampManager.ts`

*   **File Path:** `src/utils/TimestampManager.ts`
*   **Role:** A static utility class providing standardized methods for handling and converting timestamps.
*   **Key Functionalities:**
    *   Converts timestamps between WhatsApp's format (seconds) and Unix timestamps (milliseconds), which are used internally.
    *   Converts Unix timestamps to/from JavaScript `Date` objects.
    *   Formats timestamps for display purposes (e.g., in logs or the UI).
    *   Offers utility functions for comparing timestamps and getting the current time.
*   **Commonly Expected Changes / When to Update:**
    *   If timestamp conversion logic needs to be altered (e.g., due to changes in an external API).
    *   When new timestamp formatting options or utility functions are required.
    *   If the application's internal standard for timestamp representation changes (though this is unlikely for Unix milliseconds).

### Frontend Files (`public/`)

*   **`public/index.html`**: The main HTML file for the web interface. Defines the structure and layout of the UI.
    *   **Update When:** Changing the overall page layout, adding or removing major UI sections, or modifying static HTML content.
*   **`public/script.js`**: Contains the client-side JavaScript that powers the interactivity of the web interface.
    *   **Key Functionalities:** Fetches data from the backend API (endpoints served by `src/index.ts`), handles user interactions (button clicks, form submissions), updates the DOM dynamically to display data, and manages the Server-Sent Events (SSE) connection for real-time updates. Uses `window.electronAPI` (exposed by `src/preload.ts`) for any communication needed with the Electron main process.
    *   **Update When:** Adding new UI features, changing how data is displayed or fetched from the API, modifying event handling for UI elements, or updating interaction with `window.electronAPI`.
*   **`public/style.css`**: Contains all CSS rules for styling the web interface.
    *   **Update When:** Changing the visual appearance, layout, or responsiveness of the UI.

### Configuration Files

*   **`.env`**: Located in the project root (must be created manually). Stores environment-specific configurations.
    *   **Key Variables:** `SELF_CONTACT_ID`, `OPEN_AI_API_KEY`, `OPEN_AI_MODEL_KEY`, `OPEN_AI_SYSTEM_PROMPT`.
    *   **Update When:** API keys change, you want to switch OpenAI models, or modify the default system prompt loaded at startup.
*   **`forge.config.js`**: Configuration for Electron Forge, used to build and package the Electron application.
    *   **Update When:** Modifying build settings, packaging options, or platform-specific configurations for the Electron app.
*   **`package.json`**: Standard Node.js project manifest.
    *   **Key Information:** Project metadata, dependencies, scripts (e.g., `npm start`, `npm run make`).
    *   **Update When:** Adding or updating dependencies, modifying project scripts, or changing project metadata.
*   **`tsconfig.json`**: TypeScript compiler configuration.
    *   **Update When:** Changing TypeScript compilation options, target ECMAScript version, module resolution strategies, or path aliases.

### `.cursor/rules/` Directory

This directory contains files that define project-specific guidelines, documentation, and status tracking, primarily for development and collaboration (especially when using AI-assisted development tools like Cursor).

*   **`.cursor/rules/documentation.md`**: Tracks technical documentation, architectural decisions, API specifications, database schemas (if any), and other relevant project information. This file should be consulted and updated as the project evolves.
*   **`.cursor/rules/project_milestones.md`**: Contains an overview of the project, its goals, and a list of development milestones with their descriptions. Useful for tracking progress against larger objectives.
*   **`.cursor/rules/status.md`**: A file for tracking the current status of tasks, issues encountered, and completed items, particularly for ongoing development sprints or specific feature work.

For detailed instructions on how to use these files, refer to the `<custom_instructions>` provided at the beginning of the development session or the project's general contribution guidelines.
