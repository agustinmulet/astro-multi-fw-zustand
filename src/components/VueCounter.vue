<template>
  <div id="vue" class="counter">
      <button @click="state.increasePopulation">one up</button>
      <h1>{{ state.bears }} around here ...</h1>
  </div>
</template>

<script>
import create from 'vue-zustand'
import { store } from '../store';

export default {
  setup() {
    const useStore = create(store);
    const state = useStore();

    return {
      state
    }
  }
}
</script>
