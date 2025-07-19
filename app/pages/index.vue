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
  <div class="grid h-screen w-full grid-rows-3 items-center justify-center">
    <div class="row-start-2 flex gap-4">
      <NuxtLink
        v-for="mode in modes"
        :key="mode.name"
        :href="mode.page"
      >
        <ElButton class="!rounded-lg !p-8 !text-xl">
          {{ mode.name }}
        </ElButton>
      </NuxtLink>
    </div>

    <div class="row-start-3 flex flex-col items-center justify-center gap-2">
      <div class="">
        View kana
      </div>

      <div class="flex gap-2">
        <NuxtLink href="/kana/hiragana">
          <ElButton>ひらがな</ElButton>
        </NuxtLink>

        <NuxtLink href="/kana/katakana">
          <ElButton>カタカナ</ElButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style></style>
