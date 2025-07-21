<script lang="ts" setup>
import { useQuestionStore } from '~/stores/question.store';

const questionStore = useQuestionStore();

const questionCount = computed(() => questionStore.getCurrentQuestionsCount);

const resumeStatus = computed(() => {
  if (questionStore.listState.correct > questionStore.listState.wrong) return '😸';
  if (questionStore.listState.correct < questionStore.listState.wrong) return '😿';
  return '😾';
});
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div v-if="questionCount.position && questionCount.from">
      {{ questionCount.position }} / {{ questionCount.from }}
    </div>

    <div
      v-else
      class="flex gap-2"
    >
      <span>✅ <span class="text-green-700">{{ questionStore.listState.correct }}</span></span>
      <span>❌ <span class="text-red-800">{{ questionStore.listState.wrong }}</span></span>
    </div>

    <div
      class="border-lines dark:border-lines-dark relative flex justify-center rounded-xl border p-12 text-5xl"
      :class="{
        '!border-green-700': questionStore.currentQuestion.status == 'correct',
        '!border-red-800': questionStore.currentQuestion.status == 'wrong',
      }"
    >
      {{ questionStore.currentQuestion?.question?.label ?? resumeStatus }}

      <div
        v-if="questionStore.currentQuestion.status == 'wrong'"
        class="absolute bottom-3 text-sm text-gray-500 dark:text-gray-200"
      >
        {{ questionStore.currentQuestion.question?.answer ?? 'none' }}
      </div>
    </div>
  </div>
</template>

<style></style>
