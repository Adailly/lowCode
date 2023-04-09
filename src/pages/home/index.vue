<template>
  <div class="div-container">
    <div class="div-left"></div>
    <div class="div-operator"></div>
    <div class="div-right"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.div-container {
  height: 100vh;
  background: #999999;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.div-left {
  height: 100%;
  background: red;
  width: 300px;
}

.div-operator {
  height: 100%;
  background: green;
  flex-grow: 1;
}

.div-right {
  height: 100%;
  background: blue;
  width: 300px;
}
</style>