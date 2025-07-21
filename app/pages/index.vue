<script lang="ts" setup>
const { t } = useI18n();

const modes = [
  {
    name: t('home.modes.hiragana'),
    underline: 'ひらがな',
    page: 'character-learning/hiragana',
  },
  {
    name: t('home.modes.katakana'),
    underline: 'カタカナ',
    page: 'character-learning/katakana',
  },
  {
    name: t('home.modes.mixed'),
    page: 'character-learning/mixed',
  },
];
</script>

<template>
  <div class="grid h-screen w-full grid-rows-3 justify-center">
    <div class="flex translate-y-20 items-center justify-center">
      <h1 class="text-6xl font-medium">
        {{ t('home.title') }}
      </h1>
    </div>

    <div class="flex flex-col items-center justify-center gap-4">
      <h3 class="text-xl">
        {{ t('home.selectMode') }}
      </h3>

      <div class="flex items-center justify-center gap-4">
        <NuxtLink
          v-for="mode in modes"
          :key="mode.name"
          :href="mode.page"
        >
          <ElButton class="group !rounded-lg !p-8 !text-xl">
            <div class="relative flex justify-center">
              {{ mode.name }}
              <div
                v-if="mode.underline"
                class="group-hover:text-primary absolute bottom-[-13px] text-xs text-neutral-500"
              >{{ mode.underline }}</div>
            </div>
          </ElButton>
        </NuxtLink>
      </div>
    </div>

    <div class="row-start-3 flex flex-col items-center justify-center gap-2">
      <div class="">
        {{ t('home.viewkana') }}
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
