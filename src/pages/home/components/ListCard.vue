<template>
  <div class="div-list">
    <img class="div-list-img" :src="url" alt="" />
    <div class="div-list-title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.div-list {
  padding: 6px 8px;
  text-align: center;

  &-img {
    width: 45px;
    height: 45px;
  }

  &-title {
    font-size: 16px;
  }
}
</style>
