<script lang="ts" setup>
import AnswerInput from '~/components/AnswerInput.vue';
import CharacterViewport from '~/components/CharacterViewport.vue';
import { useQuestionStore } from '~/stores/question.store';

const route = useRoute();
const questionStore = useQuestionStore();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
questionStore.setQuestionList(route.params.mode as any, 20);
questionStore.setCurrentQuestion();
</script>

<template>
  <div class="w-full">
    <div class="mx-auto flex h-screen w-1/2 flex-col items-center justify-center gap-6">
      <CharacterViewport />
      <AnswerInput />
    </div>
  </div>
</template>

<style>

</style>