<script lang="ts" setup>
import { useQuestionStore } from '~/stores/question.store';

const questionStore = useQuestionStore();
const questionCount = computed(() => questionStore.getCurrentQuestionsCount);
const answer = ref<string>('');

const checkAnswer = (event?: Event | KeyboardEvent) => {
  if (event instanceof KeyboardEvent && event.key !== 'Enter') return;

  if (answer.value) {
    questionStore.answerQuestion(answer.value);
    answer.value = '';
  }
};

const setNewQuestionList = () => {
  questionStore.restartSurvey(20);
};
</script>

<template>
  <div class="flex w-full justify-center">
    <div
      v-if="questionCount.position && questionCount.from"
      class="flex gap-2"
    >
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

    <div
      v-else
      class="flex"
    >
      <ElButton
        :icon="ElIconRefreshRight"
        @click="setNewQuestionList"
      />
    </div>
  </div>
</template>

<style>

</style>
