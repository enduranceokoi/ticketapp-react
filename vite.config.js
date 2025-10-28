import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Update this with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/ticketapp-react/', // 👈 This is CRUCIAL for GitHub Pages
});
