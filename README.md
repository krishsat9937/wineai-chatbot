# Wine AI Chatbot

An open-source AI chatbot implemented using Vercel AI chatbot template designed specifically to interact with users about wine-related topics. Built with Next.js, TailwindCSS, and the AI SDK by Vercel, this project provides a seamless user interface to explore wine knowledge.

---

## Features

### Frontend
- **Responsive Design**: A clean, intuitive UI styled with TailwindCSS and animated with Framer Motion.
- **Dynamic Interactions**: Displays AI responses on the same page, creating a fluid user experience without reloads.
- **Wine-Specific Context**: LLM responses are steered to ensure accurate and relevant wine-related answers.

### Backend
- **Data Logging**:
  - Logs user queries, full AI responses, extracted specific information (second sentence), and metadata (IP address and location).
  - Stores interactions securely in a PostgreSQL database.
- **AI Guardrails**:
  - Restricts LLM interactions to wine-specific topics.
  - Handles inappropriate or unrelated queries gracefully.
- **Authentication**:
  - Secure user authentication powered by NextAuth.js.
- **Scalability**:
  - Event-driven backend using modern tools for efficient handling of AI responses and user interactions.

### Additional Features
- **OpenAI GPT Integration**: Provides wine-specific answers using `gpt-4o` as the default model.
- **Environment Variable Management**: Securely manage API keys and other sensitive information with `.env` files or Vercel Environment Variables.

---

## Getting Started

### Prerequisites
1. **Install Dependencies**: Ensure you have `pnpm` installed. 
   ```bash
   npm install -g pnpm
2. **setup environment Variables**

Set up your `.env` file using the provided `.env.example`.

### Required Environment Variables
- `OPENAI_API_KEY`: Your OpenAI API key.
- `DATABASE_URL`: URL for the PostgreSQL database.
- `AUTH_SECRET`: A secret key for authentication.
- `IPINFO_API_TOKEN`: Token for IP geolocation (optional for enhanced functionality).

---

## Running Locally

```bash
git clone https://github.com/krishna/wine-ai-chatbot.git
cd wine-ai-chatbot
pnpm install
cp .env.example .env
pnpm dev
