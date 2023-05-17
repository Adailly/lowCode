<template>
  <div class="div-layout">
    <div class="div-layout-header">
      <h3>低代码设计平台</h3>
    </div>
    <div class="div-layout-body">
      <HomeVue></HomeVue>
    </div>
    <div class="div-layout-footer">footer</div>
  </div>
</template>

<script setup lang="ts">
import HomeVue from "../home/index.vue";
</script>

<style lang="less" scoped>
.div-layout {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-header {
    padding: 8px 10px;
  }

  &-body {
    flex-grow: 1;
  }

  &-footer {
    padding: 8px 10px;
  }
}
</style>
