<script lang="ts" setup>
import { useQuestionStore } from '~/stores/question.store';

const questionStore = useQuestionStore();

const questionCount = computed(() => questionStore.getCurrentQuestionsCount);
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="">
      {{ questionCount.position }} / {{ questionCount.from }}
    </div>

    <div
      class="border-lines dark:border-lines-dark relative flex justify-center rounded-xl border p-12 text-5xl"
      :class="{
        '!border-green-700': questionStore.currentQuestion.status == 'correct',
        '!border-red-800': questionStore.currentQuestion.status == 'wrong',
      }"
    >
      {{ questionStore.currentQuestion?.question?.label ?? 'none' }}

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
