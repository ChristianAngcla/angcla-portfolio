// Use the environment variable if available, otherwise safely fallback to the local server
export const HOST = import.meta.env.VITE_API_URL || "http://localhost:8000/api";