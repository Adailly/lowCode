<template>
  <div class="div-home">
    <div class="div-home-left">
      <div>组件库</div>
      <ListCard :url="asd" :title="img" />
    </div>
    <div class="div-home-middle"></div>
    <div class="div-home-right">
      <t-space direction="vertical">
        <div>组件属性</div>
        <div>宽度：<t-input></t-input></div>
        <div>高度：<t-input></t-input></div>
      </t-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListCard from "./pages/home/components/ListCard.vue";
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