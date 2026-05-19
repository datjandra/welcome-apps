# Hello monday.com!

Welcome to the **monday.com Welcome Apps** repository – your complete guide to building custom applications on the monday.com platform. This collection showcases practical, production-ready example apps that demonstrate key features and best practices for monday.com app development.

## What is monday.com?

The monday.com platform empowers developers to create custom applications that extend and enhance the core functionality of monday.com. These client-side web projects (built with HTML, JavaScript, and CSS) can be seamlessly integrated as board views, dashboard widgets, custom recipes, and integration features. Whether you're automating workflows, visualizing data in new ways, or connecting external systems, monday.com apps provide the flexibility you need.

## Repository Overview

This repository contains four carefully crafted example applications, each demonstrating different capabilities of the monday.com SDK:

- **Quickstart React** – Learn the fundamentals of building views with React
- **Docs Viewer** – Master file attachments and document previews
- **Word Cloud** – Explore data visualization with customizable settings
- **Quickstart Integrations** – Build custom recipes and automate workflows

## Example Apps in Detail

### 1. **Quickstart React** – Board Views with React
**Location:** `/apps/quickstart-react`

The Quickstart React app is your entry point for building monday.com board views and dashboard widgets using React. This example demonstrates how to leverage the monday.com SDK to create interactive, data-driven views.

**Key Features:**
- **Board Context Integration** – Access board data, connected items, and user information
- **Settings Management** – Configure app behavior with custom settings fields
- **GraphQL API Integration** – Query monday.com data using the monday.com GraphQL API
- **Real-time Rendering** – Display board information dynamically based on user selections

**What You'll Learn:**
- How to use `monday.getContext()` to retrieve board and user information
- How to implement `monday.getSettings()` for customizable view configurations
- How to make `monday.api()` calls to fetch and manipulate board data
- Setting up ngrok for local development and testing

**Getting Started:**
```bash
cd apps/quickstart-react
npm install
npm start
```

Visit `http://localhost:4040/status` to find your ngrok public URL, then configure it in the monday.com developer console as your Board View custom URL.

---

### 2. **Docs Viewer** – Document Management and Attachments
**Location:** `/apps/docs-viewer`

The Docs Viewer app showcases how to work with file attachments in monday.com. It functions as a specialized board view that aggregates and displays attached documents directly within the app interface, making document management seamless.

**Key Features:**
- **File Attachment Handling** – Access and display board item attachments
- **Document Preview Integration** – Open documents directly in the app
- **Settings Configuration** – Customize which columns and documents to display
- **Storage API Usage** – Persist user preferences and view state
- **Context Data Access** – Retrieve attachment metadata and file information

**What You'll Learn:**
- How to access attached files from board items
- How to use `monday.storage.instance.getItem()` and `setItem()` for persistent storage
- How to implement a file browser interface
- How to integrate document viewers for various file types

**Getting Started:**
```bash
cd apps/docs-viewer
npm install
npm start
```

Configure as a Board View in monday.com with the ngrok URL from your local server.

---

### 3. **Word Cloud** – Data Visualization with Custom Settings
**Location:** `/apps/word-cloud`

The Word Cloud app demonstrates advanced visualization capabilities and user-configurable settings. It analyzes text data from your board and generates an interactive word cloud visualization, with the ability to customize the appearance and behavior.

**Key Features:**
- **Dynamic Data Analysis** – Process text from board columns to generate word frequencies
- **Interactive Visualization** – Display words with size proportional to frequency
- **Customizable Settings Fields** – Add buttons and options for user configuration
- **Max Words Control** – Users can limit the number of words displayed (50, 100, 150, 200, 300)
- **Padding Configuration** – Adjust spacing with preset options (Small, Medium, Large)
- **Real-time Updates** – View refreshes instantly when settings change

**What You'll Learn:**
- How to add view settings fields (Column selectors, Buttons, Radio options)
- How to implement responsive UI components
- How to parse and process board data for visualization
- How to handle setting changes and re-render accordingly

**Getting Started:**
```bash
cd apps/word-cloud
npm install
npm start
```

Configure as a Board View and then add custom settings fields through the monday.com developer console:
1. Add a Column selector field for text input
2. Add a Buttons field named "maxWords" with options: 50, 100, 150, 200, 300
3. Add a Buttons field named "padding" with options: Small (10), Medium (20), Large (30)

---

### 4. **Quickstart Integrations** – Recipes and Automated Workflows
**Location:** `/apps/quickstart-integrations`

The Quickstart Integrations app is your guide to building custom recipes – automated workflows that trigger actions based on board events. This example demonstrates text transformation, but the pattern applies to any integration scenario.

**Key Features:**
- **Integration Recipes** – Create automated workflows triggered by board changes
- **Custom Actions** – Define custom actions that perform specific transformations
- **JWT Authentication** – Secure communication between monday.com and your backend
- **GraphQL API Calls** – Update board data from your integration
- **Remote Options** – Provide dynamic field options for recipe configuration
- **Node.js Backend** – Backend server that handles integration logic

**Architecture:**
- **Frontend:** Integration configuration interface
- **Backend:** Express.js server that processes transformation requests
- **Middleware:** JWT authentication and request validation
- **Controllers:** Text transformation logic (extensible for any transformation)

**What You'll Learn:**
- How to create integration recipes in the monday.com developer console
- How to define custom actions with input fields
- How to handle JWT-signed requests from monday.com
- How to call the monday.com API from your backend
- How to set up ngrok tunnels for local testing

**Getting Started:**
```bash
cd apps/quickstart-integrations
npm install
```

Configure environment variables in `.env`:
```
MONDAY_SIGNING_SECRET=your_signing_secret_here
API_TOKEN=your_api_token_here
```

Run the server:
```bash
npm start
```

Then configure the integration in monday.com:
1. Create a new Integration feature
2. Add a recipe with "When a column changes" trigger
3. Create a custom action pointing to your ngrok URL (e.g., `https://your-ngrok-url/transformation/transform`)
4. Configure action input fields: Board (boardId), Item (itemId), Column (sourceColumnId), Column (targetColumnId)

**Use Case Example:**
This example transforms text from one column to another (e.g., converting uppercase to lowercase, formatting names, extracting data). You can extend this to:
- Call external APIs
- Perform complex calculations
- Sync data with other systems
- Generate reports or summaries

---

## Key SDK Concepts Across All Apps

### monday.getContext()
Retrieves contextual information about the current board, user, and app instance:
```javascript
const context = await monday.getContext();
// Returns: boardId, itemId, userId, accountId, etc.
```

### monday.getSettings()
Accesses user-configured settings for the app view:
```javascript
const settings = await monday.getSettings();
// Returns custom configuration values set by users
```

### monday.api()
Execute GraphQL queries and mutations to interact with board data:
```javascript
const query = `query { boards(ids: [${boardId}]) { name } }`;
const result = await monday.api(query);
```

### monday.storage
Persist user data and preferences locally:
```javascript
await monday.storage.instance.setItem('key', JSON.stringify(data));
const data = await monday.storage.instance.getItem('key');
```

## Development Workflow

### Local Development
1. **Install Dependencies:** `npm install` in your app directory
2. **Start Development Server:** `npm start` (includes ngrok tunnel)
3. **Get Public URL:** Visit `http://localhost:4040/status`
4. **Configure in Monday:** Add the ngrok URL to your app feature in the developer console
5. **Test & Iterate:** Changes auto-reload via ngrok

### Building & Deploying
1. **Build:** `npm run build`
2. **Package:** Zip the `./build` folder
3. **Upload:** Go to your Feature's Build tab and upload the zip
4. **Release:** Publish the build and add it to any board

## Recommended Learning Path

1. **Start with Quickstart React** – Understand the basics of views and SDK integration
2. **Explore Word Cloud** – Learn about settings and user customization
3. **Study Docs Viewer** – Master file handling and storage
4. **Master Quickstart Integrations** – Build backend integrations and recipes

## Resources

- **[monday.com Developer Docs](https://developers.monday.com)** – Complete API documentation
- **[monday.com GraphQL API](https://api.developer.monday.com)** – Query and mutation reference
- **[monday.com SDK Reference](https://github.com/mondaycom/monday-sdk-js)** – JavaScript SDK documentation
- **[App Development Guide](https://monday.com/developers/apps/quickstart-view/)** – Step-by-step tutorials

## Requirements

- **Node.js:** v10 or higher
- **npm:** Latest version recommended
- **monday.com Account:** To test and deploy apps
- **Developer Permissions:** Create apps in the Developer section

## Getting Help

Each app directory includes a detailed README with specific setup instructions. For general questions:
- Check the [monday.com Support Center](https://support.monday.com)
- Review the [Developer Documentation](https://developers.monday.com)
- Explore the [monday.com Community](https://community.monday.com)

## License

This project is licensed under the MIT License – see the LICENSE file for details.

---

**Ready to build?** Choose the example that best matches your use case and start building amazing apps on the monday.com platform!
