<script lang="ts" setup>
import AnswerInput from '~/components/AnswerInput.vue';
import CharacterViewport from '~/components/CharacterViewport.vue';
import { useQuestionStore } from '~/stores/question.store';
import type { Modes } from '~~/shared/types/Modes';

const route = useRoute();
const { t } = useI18n();
const questionStore = useQuestionStore();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const currentMode: Modes['characterLearn'] = route.params.mode as any;

if (!questionStore.questionList) {
  questionStore.startNewSurvey(currentMode, 2);
}
</script>

<template>
  <div class="w-full dark:text-white">
    <div class="mx-auto grid h-screen w-1/2 grid-cols-1 grid-rows-3 pt-12">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">
          {{ t("characterLearn.title") }}
        </h1>
        <span class="text-lg">{{ t("characterLearn.mode") }} : {{ t(`characterLearn.modes.${route.params.mode}`) }}</span>
      </div>

      <div class="flex flex-col justify-center gap-6">
        <CharacterViewport />

        <AnswerInput />
      </div>

      <div class="flex items-center justify-center">
        <NuxtLink href="/">
          <ElButton :icon="ElIconHomeFilled" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>
