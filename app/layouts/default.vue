<script lang="ts" setup>
const isDark = useDark();
const { locale, setLocale } = useI18n();
const changeColorMode = useToggle(isDark);

const toggleLocale = () => {
  setLocale(locale.value == 'en' ? 'ru' : 'en');
};
</script>

<template>
  <div class="">
    <div class="absolute grid min-h-12 w-full grid-cols-3 items-center px-4">
      <div class="">
        <div class="flex gap-2">
          <div class="flex items-center">
            <span class="text-xl">⛩️</span>

            <span class="text-xl font-medium">KANAFRAME</span>
          </div>

          <span class="text-xs text-neutral-400">
            by
            <NuxtLink
              href="https://github.com/FENIXSHIRO"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary"
            >
              FENIXSHIRO
            </NuxtLink>
          </span>
        </div>
      </div>

      <div class="col-start-3 flex justify-self-end">
        <ElButton
          class="w-fit"
          round
          @click="toggleLocale"
        >
          <span
            class="fi overflow-clip rounded-sm grayscale-50"
            :class="{ 'fi-gb': locale == 'en', 'fi-ru': locale == 'ru' }"
          />
        </ElButton>

        <ElButton
          class="w-fit"
          :icon="isDark ? ElIconMoon : ElIconSunny"
          round
          @click="changeColorMode()"
        />
      </div>
    </div>
    <slot />
  </div>
</template>

<style>

</style>
