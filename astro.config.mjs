import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';
import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solid(), svelte(), vue(), preact({ compat: true })]
});