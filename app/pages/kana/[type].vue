<script lang="ts" setup>
import KanaTable from '~/components/KanaTable.vue';

const route = useRoute();
const kanaType = route.params.type as 'hiragana' | 'katakana';
</script>

<template>
  <div class="flex h-screen items-center p-16">
    <KanaTable :type="kanaType" />
  </div>
</template>

<style>

</style>
