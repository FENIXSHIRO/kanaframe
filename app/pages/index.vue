<script lang="ts" setup>
const modes = [
  {
    name: 'Hiragana',
    page: 'character-learning/hiragana',
  },
  {
    name: 'Katakana',
    page: 'character-learning/katakana',
  },
  {
    name: 'Mixed',
    page: 'character-learning/mixed',
  },
];
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center gap-4">
    <NuxtLink
      v-for="mode in modes"
      :key="mode.name"
      :href="mode.page"
    >
      <div class="hover:border-primary rounded-lg border border-gray-200 p-5 dark:border-neutral-600 dark:text-white">
        {{ mode.name }}
      </div>
    </NuxtLink>
  </div>
</template>

<style></style>
