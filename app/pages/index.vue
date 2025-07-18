<script lang="ts" setup>
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <el-button @click="ElMessage('hello')">button</el-button>
      <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
      <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>

<style></style>
