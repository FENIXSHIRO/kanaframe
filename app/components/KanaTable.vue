<script lang="ts" setup>
import kana from '~/assets/data/kana.json';

interface Props {
  type?: 'hiragana' | 'katakana'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'hiragana',
});

// eslint-disable-next-line vue/no-setup-props-reactivity-loss
const kanaType = ref<'hiragana' | 'katakana'>(props.type ?? 'hiragana');

const changeKanaTo = (kanaName: 'hiragana' | 'katakana') => {
  navigateTo(`/kana/${kanaName}`);
};
</script>

<template>
  <div class="flex w-full flex-col items-center gap-6">
    <div class="flex">
      <ElButton
        :type="kanaType == 'hiragana' ? 'primary' : 'default'"
        @click="changeKanaTo('hiragana')"
      >
        Hiragana
      </ElButton>

      <ElButton
        :type="kanaType == 'katakana' ? 'primary' : 'default'"
        @click="changeKanaTo('katakana')"
      >
        Katakana
      </ElButton>
    </div>

    <div
      dir="rtl"
      class="grid w-full grid-flow-col grid-cols-11 grid-rows-5 justify-end gap-4"
    >
      <div class="col-start-8 row-start-2" />
      <div class="col-start-8 row-start-4" />

      <div class="col-start-10 row-start-2" />
      <div class="col-start-10 row-start-3" />
      <div class="col-start-10 row-start-4" />
      <div
        v-for="character in kana"
        :key="character.romaji"
        class="dark:border-lines-dark border-lines flex flex-col items-center justify-center rounded-lg border p-2"
      >
        <div class="text-2xl font-medium">
          {{ character[kanaType] }}
        </div>

        <div class="">
          {{ character.romaji }}
        </div>
      </div>
    </div>

    <div class="">
      <NuxtLink href="/">
        <ElButton :icon="ElIconHomeFilled" />
      </NuxtLink>
    </div>
  </div>
</template>

<style>

</style>
