<script lang="ts" setup>
import alphabet from '~/assets/data/alphabet.json';

const route = useRoute();
</script>

<template>
  <div>
    <div
      dir="rtl"
      class="grid w-full grid-flow-col grid-cols-11 grid-rows-5 justify-end"
    >
      <div class="col-start-8 row-start-2" />
      <div class="col-start-8 row-start-4" />

      <div class="col-start-10 row-start-2" />
      <div class="col-start-10 row-start-3" />
      <div class="col-start-10 row-start-4" />
      <div
        v-for="character in alphabet"
        :key="character.romaji"
        class=""
      >
        {{ character.hiragana }}
      </div>
    </div>
  </div>
</template>

<style>

</style>
