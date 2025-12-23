# Testaurant - Quick Start Guide

## 🚀 How to Run This Project

### Prerequisites

Before you start, make sure you have:
- **Node.js 18+** installed
- **Google OAuth credentials** (see setup below)

---

## Local Development

### Step 1: Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure OAuth consent screen
6. Add authorized redirect URIs:
   - `http://localhost:5173`
   - `https://test-with-ease.netlify.app`
7. Copy your **Client ID**

### Step 2: Setup Frontend

```bash
# Navigate to frontend directory
cd testaurant_ui

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your Google Client ID and Backend URL:
# VITE_GOOGLE_CLIENT_ID=your-google-client-id-here
# VITE_API_BASE_URL=https://your-backend-api.com
```

### Step 3: Start Development Server

```bash
npm run dev
```

**Frontend will be running at:** `http://localhost:5173`

---

## 🔧 Troubleshooting

### Node modules not found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
```bash
# Vite will automatically use the next available port
# Or kill the process:
lsof -ti:5173 | xargs kill -9  # macOS/Linux
```

### Google OAuth fails
- Verify your Google Client ID is correct in `.env`
- Check that `http://localhost:5173` is in your authorized redirect URIs
- Clear browser cookies and try again

---

## 🎯 What's Working Now
✅ **Authentication:** Google OAuth login & JWT token management
✅ **Dashboard:** Modern, responsive interface for test management
✅ **Organization Setup:** Wizard for creating and joining organizations

---

**Happy Testing! 🧪**
