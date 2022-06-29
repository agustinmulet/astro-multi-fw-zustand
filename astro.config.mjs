import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solid(), svelte(), vue(), preact({ compat: true })]
});