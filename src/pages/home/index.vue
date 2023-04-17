<template>
  <div class="div-home">
    <div class="div-home-left"></div>
    <div class="div-home-middle"></div>
    <div class="div-home-right"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.div-home {
  height: 100%;
  background: #999999;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &-left {
    height: 100%;
    background: white;
    width: 300px;
    padding: 10px;
  }

  &-middle {
    height: 100%;
    padding: 10px;
    flex-grow: 1;
  }

  &-right {
    height: 100%;
    background: white;
    width: 300px;
    padding: 10px;
  }
}
</style>