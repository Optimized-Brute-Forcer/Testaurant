# Testaurant

An automated testing platform for backend services, providing a modern interface for multi-organization test management.

## Features

- 🔐 **Multi-Organization RBAC**: Secure isolation with role-based access control
- 🚀 **Multi-Protocol Testing**: REST APIs, SQL databases, and MongoDB (via external BFF)
- 🔗 **Data Feed-Forward**: Chain test steps with dynamic data passing
- ✅ **Response Validation**: Automated validation against expected responses
- 🌍 **Environment Management**: Support for multiple environments (QA, PREPROD, PROD)

## Architecture

- **Frontend**: React 19 + TypeScript + Vite
- **Authentication**: Google OAuth 2.0 + JWT (External)
- **Deployment**: Optimized for Netlify

## Quick Start

### Prerequisites

- Node.js 18+
- Google OAuth Client ID

### Frontend Setup

```bash
cd testaurant_ui
npm install
npm run dev
```

## Project Structure

```
testaurant/
├── testaurant_ui/           # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── contexts/        # React contexts
│   │   └── main.tsx         # App entry point
│   └── package.json
└── netlify.toml             # Netlify configuration
```

## Documentation

- [Quick Start Guide](QUICKSTART.md)
- [Low Level Design](lld.md)

## License

MIT
