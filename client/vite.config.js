import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.BACK_END_URL': JSON.stringify(env.BACK_END_URL)
    },
    plugins: [react()],
  }
})