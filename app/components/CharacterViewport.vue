<script lang="ts" setup>
  import { useQuestionStore } from '~/stores/question.store';

  const questionStore = useQuestionStore();

  const questionCount = computed(() => questionStore.getCurrentQuestionsCount);
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="">{{ questionCount.position }} / {{ questionCount.from }}</div>

    <div class="flex justify-center rounded-xl border border-gray-200 p-12 text-5xl">
      {{ questionStore.currentQuestion?.label ?? 'none' }}
    </div>
  </div>
</template>

<style>

</style>