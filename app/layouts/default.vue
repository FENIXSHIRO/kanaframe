<script lang="ts" setup>
const isDark = useDark();

const changeColorMode = useToggle(isDark);
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

      <ElButton
        class="col-start-3 w-fit justify-self-end"
        :icon="isDark ? ElIconMoon : ElIconSunny"
        round
        @click="changeColorMode()"
      />
    </div>
    <slot />
  </div>
</template>

<style>

</style>
