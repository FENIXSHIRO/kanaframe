<script lang="ts" setup>
import groups from '~/assets/data/groups.json';

interface Props {
  selectedMode: Modes['characterLearn'] | null
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>();

const emit = defineEmits<{
  backToModes: [ ]
}>();

const selectedGroups = ref<string[]>([]);

const toggleGroup = (groupKey: string) => {
  if (selectedGroups.value.includes(groupKey)) {
    selectedGroups.value = selectedGroups.value.filter(group => group !== groupKey);
  }
  else {
    selectedGroups.value.push(groupKey);
  }
};

const toggleAll = () => {
  const allKeys = Object.keys(groups);

  if (selectedGroups.value.length == allKeys.length) {
    selectedGroups.value = [];
    return;
  }

  selectedGroups.value = allKeys;
};

const backToModes = () => {
  emit('backToModes');
};
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <h2>{{ selectedMode }}</h2>
    <div class="grid grid-cols-2 gap-x-4 gap-y-2">
      <div
        v-for="group, groupKey in groups"
        :key="`group-${groupKey}`"
        class="hover:border-primary/50 active:border-primary flex gap-1 rounded-lg border p-1 px-4 transition-all duration-100 ease-in-out select-none"
        :class="{ 'bg-primary-bg dark:bg-primary-bg-dark border-primary/30 text-primary': selectedGroups.includes(groupKey), 'border-lines dark:border-lines-dark': !selectedGroups.includes(groupKey) }"
        @click="toggleGroup(groupKey)"
      >
        <div
          v-for="character, characterIndex in group"
          :key="`character-${groupKey}-${character}`"
          class=""
        >
          <span>{{ character }}</span>
          <span v-if="(characterIndex + 1) !== group.length">,</span>
        </div>
      </div>

      <div class="flex w-full">
        <ElButton
          :icon="ElIconSwitch"
          class="w-full !rounded-lg !py-1"
          @click="toggleAll"
        />
      </div>
    </div>

    <div class="flex w-full justify-between">
      <ElButton
        class=""
        :icon="ElIconBack"
        @click="backToModes"
      />

      <ElButton
        class="w-full"
      >
        Start
      </ElButton>

      <ElButton
        class=""
        :icon="ElIconDelete"
      />
    </div>
  </div>
</template>

<style>

</style>
