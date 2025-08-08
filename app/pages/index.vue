<script lang="ts" setup>
import ModeSettings from '~/components/home/ModeSettings.vue';

interface ModeList {
  name: Modes['characterLearn'],
  label: string,
  underline?: string
}

const { t } = useI18n();

const selectedMode = ref<Modes['characterLearn'] | null>(null);

const modes: ModeList[] = [
  {
    name: 'hiragana',
    label: t('home.modes.hiragana'),
    underline: 'ひらがな',
  },
  {
    name: 'katakana',
    label: t('home.modes.katakana'),
    underline: 'カタカナ',
  },
  {
    name: 'mixed',
    label: t('home.modes.mixed'),
  },
];

const clearSelectedMode = () => {
  selectedMode.value = null;
};

const selectMode = (mode: Modes['characterLearn']) => {
  selectedMode.value = mode;
};
</script>

<template>
  <div class="grid h-screen w-full grid-rows-[0.5fr_2fr_0.5fr] justify-center">
    <div
      v-if="!selectedMode"
      class="flex items-center justify-center self-center"
    >
      <h1 class="flex text-6xl font-medium">
        {{ t('home.title') }}
      </h1>
    </div>

    <div class="row-start-2 flex flex-col items-center justify-center gap-4">
      <h3 class="text-3xl font-medium">
        {{ t('home.selectMode') }}
      </h3>

      <div
        v-if="!selectedMode"
        class="flex items-center justify-center gap-4"
      >
        <div
          v-for="mode in modes"
          :key="mode.label"
        >
          <ElButton
            class="group !rounded-lg !p-8 !text-xl"
            @click="selectMode(mode.name)"
          >
            <div class="relative flex justify-center">
              {{ mode.label }}
              <div
                v-if="mode.underline"
                class="group-hover:text-primary absolute bottom-[-13px] text-xs text-neutral-500"
              >
                {{ mode.underline }}
              </div>
            </div>
          </ElButton>
        </div>
      </div>

      <ModeSettings
        v-else
        :selected-mode="selectedMode"
        @back-to-modes="clearSelectedMode"
      />
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
