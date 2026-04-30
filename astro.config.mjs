// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  output: "static",
  integrations: [],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
    {
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: [300, 400, 500],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
});
