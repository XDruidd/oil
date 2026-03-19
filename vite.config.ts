import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA, type ManifestOptions} from "vite-plugin-pwa"

const manifest : Partial<ManifestOptions> | false = {
  "theme_color":"#ffffff",
  "background_color":"#ffffff",
  "icons":[
    {
      "purpose":"maskable",
      "sizes":"512x512",
      "src":"icon512_maskable.png",
      "type":"image/png"
    },
    {
      "purpose":"any",
      "sizes":"512x512",
      "src":"icon512_rounded.png",
      "type":"image/png"
    }
  ],
  "orientation":"any",
  "display":"standalone",
  "lang":"en",
  "name":"Oil",
  "short_name":"Oil"
}

// https://vite.dev/config/
export default defineConfig({
  base: '/oil/',
  plugins: [
    react(), 
    VitePWA(
      {
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*{html,css,js,icon,svg}"],
        },
        manifest: manifest
      })],
})
