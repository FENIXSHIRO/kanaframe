<script lang="ts" setup>
import { useQuestionStore } from '~/stores/question.store';

const questionStore = useQuestionStore();

const answer = ref<string>('');

const checkAnswer = (event?: Event | KeyboardEvent) => {
  if (event instanceof KeyboardEvent && event.key !== 'Enter') return;

  if (answer.value) {
    questionStore.answerQuestion(answer.value);
    answer.value = '';
  }
};
</script>

<template>
  <div class="flex w-full justify-center gap-2">
    <el-input
      v-model="answer"
      style="width: 64px"
      placeholder="..."
      @keydown="checkAnswer"
    />
    <el-button
      :icon="ElIconRight"
      @click="checkAnswer"
    />
  </div>
</template>

<style>

</style>
