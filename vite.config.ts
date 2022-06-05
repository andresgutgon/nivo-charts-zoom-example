import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      'react/jsx-runtime': 'react/jsx-runtime.js',
      '@nivo/core' : path.resolve(__dirname, '../nivo/packages/core/dist/nivo-core.es.js'),
      '@nivo/line' : path.resolve(__dirname, '../nivo/packages/line/dist/nivo-line.es.js')
    },
  },
  plugins: [react()]
})
