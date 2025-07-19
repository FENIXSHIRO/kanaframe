<script lang="ts" setup>
const isDark = useDark();

const changeColorMode = useToggle(isDark);
</script>

<template>
  <div class="dark:bg-neutral-900">
    <div class="absolute grid min-h-12 w-full grid-cols-3 items-center">
      <el-button
        class="col-start-3 me-2 w-fit justify-self-end"
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
