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
  <div class="w-full dark:text-white">
    <div class="mx-auto flex h-screen w-1/2 flex-col items-center justify-between gap-6 py-12">
      <div class="flex flex-col items-center">
        <h1 class="text-2xl font-bold">
          Character learn
        </h1>
        <span>mode: {{ route.params.mode }}</span>
      </div>

      <div class="flex flex-col gap-6">
        <CharacterViewport />
        <AnswerInput />
      </div>

      <div class="">
        <NuxtLink href="/">
          <el-button :icon="ElIconHomeFilled" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>
